import express from 'express';
import { signUp ,Login } from '../Controller/userController'

const router = express.Router();

router.post('/signup', signUp);

export default router;
