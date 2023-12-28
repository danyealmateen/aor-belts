import mongoose from "mongoose";

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
    default: "",
  },
  graduated: {
    type: Boolean,
    default: false,
  },
});

export const Barn = mongoose.model("barn", student, "barn");
