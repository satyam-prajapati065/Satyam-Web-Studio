import express from 'express';
import {
  getApprovedTestimonials,
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial
} from '../controllers/testimonialController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getApprovedTestimonials)
  .post(protect, createTestimonial);

router.get('/all', protect, getAllTestimonials);

router.route('/:id')
  .put(protect, updateTestimonial)
  .delete(protect, deleteTestimonial);

export default router;
