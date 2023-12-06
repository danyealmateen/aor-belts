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
  graduated: {
    type: Boolean,
  },
});

export const Barn = mongoose.model('barn', student, 'barn');
