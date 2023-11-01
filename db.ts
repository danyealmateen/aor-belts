import mongoose from 'mongoose';

const connectToDatabase = () => {
  mongoose
    .connect('mongodb://localhost:27017/aor-belts', {})
    .then(() => console.log('Databasanslutning framgångsrik'))
    .catch((error) => {
      console.error('Databasanslutning misslyckades:', error);
    });
};

export default connectToDatabase;
