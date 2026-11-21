import mongoose from 'mongoose';

const inquirySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    businessType: {
      type: String,
      default: 'Individual / Startup'
    },
    websiteType: {
      type: String,
      required: true
    },
    budget: {
      type: String,
      default: '$500 - $1,500'
    },
    projectDetails: {
      type: String,
      required: true
    },
    templateName: {
      type: String,
      default: ''
    },
    status: {
      type: String,
      enum: ['new', 'contacted', 'in_discussion', 'proposal_sent', 'in_progress', 'completed', 'archived'],
      default: 'new'
    },
    adminNotes: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

const Inquiry = mongoose.model('Inquiry', inquirySchema);
export default Inquiry;
