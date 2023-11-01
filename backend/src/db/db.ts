import mongoose from 'mongoose';

const connectToDatabase = () => {
  if (!process.env.MONGODB_URL) {
    throw new Error('MONGODB_URL is not defined in .env file');
  }

  mongoose
    .connect(process.env.MONGODB_URL, {})
    .then(() => console.log('Connected to the database'))
    .catch((error) => {
      console.error('Connection to the database FAILED!:', error);
    });
};

export default connectToDatabase;
