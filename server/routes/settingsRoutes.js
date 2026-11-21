import express from 'express';
import { getSettings, updateSettings, uploadFile } from '../controllers/settingsController.js';
import { protect } from '../middleware/authMiddleware.js';
import { upload } from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getSettings)
  .put(protect, updateSettings);

router.post('/upload', protect, upload.single('image'), uploadFile);

export default router;
