import mongoose from 'mongoose';

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/aor-belts', {})
    .then(() => console.log('Connected to the database'))
    .catch((error) => {
      console.error('Connection to the database FAILED!:', error);
    });
};

export default connectToDatabase;
