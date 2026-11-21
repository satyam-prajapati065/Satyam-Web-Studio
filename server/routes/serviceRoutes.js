import express from 'express';
import {
  getServices,
  getServiceByIdentifier,
  createService,
  updateService,
  deleteService
} from '../controllers/serviceController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getServices)
  .post(protect, createService);

router.route('/:identifier')
  .get(getServiceByIdentifier);

router.route('/:id')
  .put(protect, updateService)
  .delete(protect, deleteService);

export default router;
