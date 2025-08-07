import mongoose from 'mongoose';

import { MONGO_URL, NODE_ENV } from './serverConfig.js';

export default async function dbConnection() {
  try {
    if (NODE_ENV === 'development') {
      await mongoose.connect(MONGO_URL);
    }
    console.log('Database connected successfully');
  } catch (error) {
    console.log('Error connecting to database', error);
  }
}
