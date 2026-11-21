import Inquiry from '../models/Inquiry.js';

// @desc    Create new inquiry (Contact form submission)
// @route   POST /api/inquiries
// @access  Public
export const createInquiry = async (req, res) => {
  try {
    const { name, email, phone, businessType, websiteType, budget, projectDetails, templateName } = req.body;

    if (!name || !email || !phone || !projectDetails) {
      return res.status(400).json({
        success: false,
        message: 'Please fill in all required fields (Name, Email, Phone, Project Details)'
      });
    }

    const inquiry = new Inquiry({
      name,
      email,
      phone,
      businessType: businessType || 'Individual / Startup',
      websiteType: websiteType || 'General Web Development',
      budget: budget || '$500 - $1,500',
      projectDetails,
      templateName: templateName || ''
    });

    const saved = await inquiry.save();
    res.status(201).json({
      success: true,
      message: 'Thank you! Your project inquiry has been received. Satyam will contact you shortly.',
      data: saved
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get all inquiries
// @route   GET /api/inquiries
// @access  Private (Admin)
export const getInquiries = async (req, res) => {
  try {
    const { status, search } = req.query;
    let query = {};
    if (status && status !== 'all') query.status = status;
    if (search) {
      const regex = new RegExp(search, 'i');
      query.$or = [{ name: regex }, { email: regex }, { phone: regex }, { websiteType: regex }];
    }

    const inquiries = await Inquiry.find(query).sort({ createdAt: -1 });
    res.json({ success: true, count: inquiries.length, data: inquiries });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Get single inquiry
// @route   GET /api/inquiries/:id
// @access  Private (Admin)
export const getInquiryById = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found' });
    res.json({ success: true, data: inquiry });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update inquiry status or notes
// @route   PUT /api/inquiries/:id
// @access  Private (Admin)
export const updateInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found' });

    if (req.body.status) inquiry.status = req.body.status;
    if (req.body.adminNotes !== undefined) inquiry.adminNotes = req.body.adminNotes;

    const updated = await inquiry.save();
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete inquiry
// @route   DELETE /api/inquiries/:id
// @access  Private (Admin)
export const deleteInquiry = async (req, res) => {
  try {
    const inquiry = await Inquiry.findById(req.params.id);
    if (!inquiry) return res.status(404).json({ success: false, message: 'Inquiry not found' });

    await inquiry.deleteOne();
    res.json({ success: true, message: 'Inquiry deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
