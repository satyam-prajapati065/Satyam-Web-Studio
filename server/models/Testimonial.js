import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema(
  {
    clientName: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: String,
      default: ''
    },
    company: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
      default: 5
    },
    projectType: {
      type: String,
      default: ''
    },
    isApproved: {
      type: Boolean,
      default: false
    },
    displayOrder: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);
export default Testimonial;
