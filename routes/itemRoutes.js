import { Router } from 'express';
import { getRandomItem, getAllItems } from '../controllers/itemController.js';import { rateLimiter } from '../utils/rateLimiter.js';

const router = Router();

router.get('/items/random', rateLimiter('item', 900), getRandomItem);
router.get('/items', rateLimiter('item', 900), getAllItems);
export default router;