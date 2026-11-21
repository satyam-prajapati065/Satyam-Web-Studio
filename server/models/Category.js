import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    description: {
      type: String,
      required: true
    },
    coverImage: {
      type: String,
      default: ''
    },
    iconName: {
      type: String,
      default: 'Globe'
    },
    badge: {
      type: String,
      default: ''
    },
    displayOrder: {
      type: Number,
      default: 0
    }
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);
export default Category;
