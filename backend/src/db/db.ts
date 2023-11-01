import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.MONGODB_URL;

const connectToDatabase = () => {
  mongoose
    .connect(`${url}`, {})
    .then(() => console.log('Connected to the database'))
    .catch((error) => {
      console.error('Connection to the database FAILED!:', error);
    });
};

export default connectToDatabase;
