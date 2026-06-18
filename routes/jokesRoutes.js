import express from 'express';
import { getRandomJoke } from '../controllers/jokesController.js';

const router = express.Router();

router.get('/jokes/api', getRandomJoke);

export default router;