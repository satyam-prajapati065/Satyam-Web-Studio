import Category from '../models/Category.js';
import Template from '../models/Template.js';

// @desc    Get all categories with dynamic template count
// @route   GET /api/categories
// @access  Public
export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find().sort({ displayOrder: 1, name: 1 });
    
    // Aggregate counts of templates per category
    const counts = await Template.aggregate([
      { $group: { _id: '$categorySlug', count: { $sum: 1 } } }
    ]);

    const countMap = {};
    counts.forEach(item => {
      countMap[item._id] = item.count;
    });

    const categoriesWithCount = categories.map(cat => ({
      ...cat.toObject(),
      templateCount: countMap[cat.slug] || 0
    }));

    res.json({ success: true, count: categoriesWithCount.length, data: categoriesWithCount });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single category by slug
// @route   GET /api/categories/:slug
// @access  Public
export const getCategoryBySlug = async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug.toLowerCase() });
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    const templates = await Template.find({ categorySlug: category.slug });
    res.json({ success: true, data: { ...category.toObject(), templates, templateCount: templates.length } });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create category
// @route   POST /api/categories
// @access  Private (Admin)
export const createCategory = async (req, res) => {
  try {
    const { name, description, coverImage, iconName, badge, displayOrder } = req.body;
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

    const existing = await Category.findOne({ slug });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Category already exists' });
    }

    const category = new Category({
      name,
      slug,
      description,
      coverImage: coverImage || '',
      iconName: iconName || 'Globe',
      badge: badge || '',
      displayOrder: displayOrder || 0
    });

    const saved = await category.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update category
// @route   PUT /api/categories/:id
// @access  Private (Admin)
export const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    const fields = ['name', 'description', 'coverImage', 'iconName', 'badge', 'displayOrder'];
    fields.forEach(field => {
      if (req.body[field] !== undefined) category[field] = req.body[field];
    });

    const updated = await category.save();
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete category
// @route   DELETE /api/categories/:id
// @access  Private (Admin)
export const deleteCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }
    await category.deleteOne();
    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
