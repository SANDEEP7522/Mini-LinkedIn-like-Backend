import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import { JWT_SECRET } from '../config/serverConfig.js';
import User from '../models/userModel.js';
import { catchAsyncError } from './catchAsycError.js';

export const isAuthenticated = catchAsyncError(async (req, res, next) => {
  // both cookie and header method
  const cookieToken = req.cookies?.token;
  const headerToken =
    req.headers?.token || req.headers?.authorization?.split(' ')[1];

  console.log('Cookie Token:', cookieToken);
  console.log('Header Token:', headerToken);

  const token = cookieToken || headerToken;

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      success: false,
      message: 'Please Login to access this resource'
    });
  }
  const decoded = jwt.verify(token, JWT_SECRET);
  req.user = await User.findById(decoded.id);
  next();
});
