import express from 'express'

import { getBestiary } from '../controllers/bestiary_controller.js'

const router = express.Router();

// express serves the responses from API requests from clientside by referencing controllers in controllers directory to data from MongoDB
router.get('/', getBestiary);

export default router;