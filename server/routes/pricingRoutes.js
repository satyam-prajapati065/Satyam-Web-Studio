import express from 'express';
import {
  getPricingPackages,
  createPricingPackage,
  updatePricingPackage,
  deletePricingPackage
} from '../controllers/pricingController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getPricingPackages)
  .post(protect, createPricingPackage);

router.route('/:id')
  .put(protect, updatePricingPackage)
  .delete(protect, deletePricingPackage);

export default router;
