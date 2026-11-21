import express from 'express';
import {
  getTemplates,
  getTemplateByIdentifier,
  createTemplate,
  updateTemplate,
  deleteTemplate
} from '../controllers/templateController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getTemplates)
  .post(protect, createTemplate);

router.route('/:identifier')
  .get(getTemplateByIdentifier);

router.route('/:id')
  .put(protect, updateTemplate)
  .delete(protect, deleteTemplate);

export default router;
