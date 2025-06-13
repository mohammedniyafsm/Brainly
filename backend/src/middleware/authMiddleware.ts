import { Request, Response ,NextFunction} from 'express';
import jwt from 'jsonwebtoken';


// Middleware to authenticate JWT
export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY|| 'your_jwt_secret') as { id: string };
    req.user  = decoded.id;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
    console.log(error);
    
  }
};
