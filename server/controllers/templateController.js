import Template from '../models/Template.js';
import Category from '../models/Category.js';

// @desc    Get all templates with search, category filtering & sorting
// @route   GET /api/templates
// @access  Public
export const getTemplates = async (req, res) => {
  try {
    const { category, search, featured, sort } = req.query;
    let query = {};

    if (category && category !== 'all') {
      query.categorySlug = category.toLowerCase().trim();
    }

    if (featured === 'true') {
      query.isFeatured = true;
    }

    if (search) {
      const searchRegex = new RegExp(search.trim(), 'i');
      query.$or = [
        { title: searchRegex },
        { shortDescription: searchRegex },
        { category: searchRegex },
        { techStack: searchRegex },
        { designStyle: searchRegex }
      ];
    }

    let sortOptions = { createdAt: -1 };
    if (sort === 'title-asc') sortOptions = { title: 1 };
    if (sort === 'title-desc') sortOptions = { title: -1 };
    if (sort === 'oldest') sortOptions = { createdAt: 1 };
    if (sort === 'featured') sortOptions = { isFeatured: -1, createdAt: -1 };

    const templates = await Template.find(query).sort(sortOptions);
    res.json({ success: true, count: templates.length, data: templates });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single template by slug or ID
// @route   GET /api/templates/:identifier
// @access  Public
export const getTemplateByIdentifier = async (req, res) => {
  try {
    const { identifier } = req.params;
    let template = await Template.findOne({
      $or: [{ slug: identifier }, { templateId: identifier }]
    });

    if (!template && identifier.match(/^[0-9a-fA-F]{24}$/)) {
      template = await Template.findById(identifier);
    }

    if (!template) {
      return res.status(404).json({ success: false, message: 'Template not found' });
    }

    // Also get related templates from same category
    const related = await Template.find({
      categorySlug: template.categorySlug,
      _id: { $ne: template._id }
    }).limit(3);

    res.json({ success: true, data: template, related });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create template
// @route   POST /api/templates
// @access  Private (Admin)
export const createTemplate = async (req, res) => {
  try {
    const {
      title,
      category,
      categorySlug,
      thumbnail,
      shortDescription,
      fullDescription,
      features,
      techStack,
      designStyle,
      responsiveStatus,
      demoUrl,
      demoSlug,
      isFeatured,
      previewImages
    } = req.body;

    // generate slug
    const baseSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    let slug = baseSlug;
    let counter = 1;
    while (await Template.findOne({ slug })) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    const templateId = `SWS-${Math.floor(1000 + Math.random() * 9000)}`;

    const template = new Template({
      templateId,
      title,
      slug,
      category,
      categorySlug: categorySlug || category.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      thumbnail,
      shortDescription,
      fullDescription: fullDescription || shortDescription,
      features: features || [],
      techStack: techStack || ['React.js', 'Vite', 'CSS3', 'Responsive Design'],
      designStyle: designStyle || 'Modern Clean SaaS',
      responsiveStatus: responsiveStatus || 'Fully Responsive (Mobile, Tablet, Desktop)',
      demoUrl: demoUrl || `/demo/${demoSlug || slug}`,
      demoSlug: demoSlug || slug,
      isFeatured: !!isFeatured,
      previewImages: previewImages || [thumbnail]
    });

    const saved = await template.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update template
// @route   PUT /api/templates/:id
// @access  Private (Admin)
export const updateTemplate = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ success: false, message: 'Template not found' });
    }

    const fields = [
      'title', 'category', 'categorySlug', 'thumbnail', 'shortDescription',
      'fullDescription', 'features', 'techStack', 'designStyle',
      'responsiveStatus', 'demoUrl', 'demoSlug', 'isFeatured', 'previewImages'
    ];

    fields.forEach(field => {
      if (req.body[field] !== undefined) {
        template[field] = req.body[field];
      }
    });

    const updated = await template.save();
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete template
// @route   DELETE /api/templates/:id
// @access  Private (Admin)
export const deleteTemplate = async (req, res) => {
  try {
    const template = await Template.findById(req.params.id);
    if (!template) {
      return res.status(404).json({ success: false, message: 'Template not found' });
    }

    await template.deleteOne();
    res.json({ success: true, message: 'Template deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
