import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    client: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    thumbnail: {
      type: String,
      required: true
    },
    images: [{
      type: String
    }],
    technologies: [{
      type: String
    }],
    liveUrl: {
      type: String,
      default: ''
    },
    githubUrl: {
      type: String,
      default: ''
    },
    isFeatured: {
      type: Boolean,
      default: false
    },
    completionDate: {
      type: String,
      default: ''
    }
  },
  { timestamps: true }
);

const Project = mongoose.model('Project', projectSchema);
export default Project;
