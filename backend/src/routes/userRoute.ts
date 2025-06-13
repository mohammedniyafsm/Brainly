import express from 'express';
import { signUp ,Login } from '../controller/userController';
import {AddContent} from '../controller/contentController';
import {authMiddleware as protect} from '../middleware/authMiddleware';
import { AddTag } from '../controller/tagController';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', Login);
router.post('/content',protect ,AddContent);
router.post('/tag' ,protect,AddTag);

export default router;