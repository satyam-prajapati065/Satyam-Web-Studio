import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    shortDescription: {
      type: String,
      required: true
    },
    fullDescription: {
      type: String,
      required: true
    },
    iconName: {
      type: String,
      default: 'Code'
    },
    features: [{
      type: String
    }],
    technologies: [{
      type: String
    }],
    deliverables: [{
      type: String
    }],
    priceEstimate: {
      type: String,
      default: ''
    },
    turnaround: {
      type: String,
      default: '3-7 Business Days'
    },
    displayOrder: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Service = mongoose.model('Service', serviceSchema);
export default Service;
