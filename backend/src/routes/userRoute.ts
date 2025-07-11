import express from 'express';
import { signUp ,Login } from '../controller/userController';
import {AddContent, deleteContent, getContent} from '../controller/contentController';
import {authMiddleware as protect} from '../middleware/authMiddleware';
import { AddTag } from '../controller/tagController';
import { getShareLink, ShareLink } from '../controller/linkController';

const router = express.Router();

router.post('/signup', signUp);
router.post('/login', Login);
router.get('/content',protect ,getContent);
router.post('/content',protect ,AddContent);
router.delete('/content',protect ,deleteContent);
router.post('/tag' ,protect,AddTag);
router.post('/shareBrain' ,protect,ShareLink);
router.get('/:sharelink' ,getShareLink);

export default router;