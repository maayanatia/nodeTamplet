import express from 'express';
import { getRandomAdvice } from '../controllers/adviceController.js';

const router = express.Router();

router.get('/advice/api', getRandomAdvice);

export default router;
