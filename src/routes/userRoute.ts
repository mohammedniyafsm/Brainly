import express from 'express';
import { signUp ,Login } from '../controller/userController'

const router = express.Router();

router.post('/signup', signUp);

export default router;