import mongoose from 'mongoose';

const pricingSchema = new mongoose.Schema(
  {
    tier: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    priceDetail: {
      type: String,
      default: 'one-time investment'
    },
    description: {
      type: String,
      required: true
    },
    popular: {
      type: Boolean,
      default: false
    },
    badge: {
      type: String,
      default: ''
    },
    features: [{
      type: String
    }],
    notIncluded: [{
      type: String
    }],
    turnaround: {
      type: String,
      default: '3-7 days'
    },
    ctaText: {
      type: String,
      default: 'Choose Plan'
    },
    displayOrder: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Pricing = mongoose.model('Pricing', pricingSchema);
export default Pricing;
