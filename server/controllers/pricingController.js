import Pricing from '../models/Pricing.js';

// @desc    Get pricing packages
// @route   GET /api/pricing
// @access  Public
export const getPricingPackages = async (req, res) => {
  try {
    const packages = await Pricing.find().sort({ displayOrder: 1 });
    res.json({ success: true, count: packages.length, data: packages });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Create pricing package
// @route   POST /api/pricing
// @access  Private (Admin)
export const createPricingPackage = async (req, res) => {
  try {
    const pricing = new Pricing(req.body);
    const saved = await pricing.save();
    res.status(201).json({ success: true, data: saved });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Update pricing package
// @route   PUT /api/pricing/:id
// @access  Private (Admin)
export const updatePricingPackage = async (req, res) => {
  try {
    const pricing = await Pricing.findById(req.params.id);
    if (!pricing) return res.status(404).json({ success: false, message: 'Pricing package not found' });
    Object.assign(pricing, req.body);
    const updated = await pricing.save();
    res.json({ success: true, data: updated });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// @desc    Delete pricing package
// @route   DELETE /api/pricing/:id
// @access  Private (Admin)
export const deletePricingPackage = async (req, res) => {
  try {
    const pricing = await Pricing.findById(req.params.id);
    if (!pricing) return res.status(404).json({ success: false, message: 'Pricing package not found' });
    await pricing.deleteOne();
    res.json({ success: true, message: 'Pricing package deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
