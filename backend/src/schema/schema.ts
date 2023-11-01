import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const student = new Schema({
  name: {
    type: String,
  },
  belt: {
    type: String,
  },
  group: {
    type: String,
  },
});

export const Student = mongoose.model('Student', student);
