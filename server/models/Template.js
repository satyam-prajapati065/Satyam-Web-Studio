import mongoose from 'mongoose';

const templateSchema = new mongoose.Schema(
  {
    templateId: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
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
    category: {
      type: String,
      required: true,
      trim: true
    },
    categorySlug: {
      type: String,
      required: true,
      lowercase: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    shortDescription: {
      type: String,
      required: true
    },
    fullDescription: {
      type: String,
      default: ''
    },
    features: [{
      type: String
    }],
    techStack: [{
      type: String
    }],
    designStyle: {
      type: String,
      default: 'Modern Clean'
    },
    responsiveStatus: {
      type: String,
      default: 'Fully Responsive (Mobile, Tablet, Desktop)'
    },
    demoUrl: {
      type: String,
      default: ''
    },
    demoSlug: {
      type: String,
      required: true
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    previewImages: [{
      type: String
    }]
  },
  { timestamps: true }
);

const Template = mongoose.model('Template', templateSchema);
export default Template;
