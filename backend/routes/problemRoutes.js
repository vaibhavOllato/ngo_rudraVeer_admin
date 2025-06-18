import express from 'express';
import { authenticate, authorize } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Accessible by both admin and sub-admin
router.get('/view-all', authenticate, authorize('admin', 'sub-admin'), (req, res) => {
  res.send('All problems viewed successfully');
});

// Accessible by only admin
router.post('/create', authenticate, authorize('admin'), (req, res) => {
  res.send('Problem created successfully');
});

export default router;
