import express from 'express';
import { getRandomJoke } from '../controllers/jokesController.js';

const router = express.Router();

router.get('/jokes/api', rateLimiter('joke', 9500), getRandomJoke);

export default router;