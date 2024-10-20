import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide the book title.'],
  },
  author: {
    type: String,
    required: [true, 'Please provide the author of the book.'],
  },
  description: {
    type: String,
  }
});

export default mongoose.model("Book", BookSchema); // the mongoose.model, to avoid error in runtime