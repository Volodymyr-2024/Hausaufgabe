import mongoose from "mongoose";

const magazineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  issueNumber: {
    type: String,
    required: true,
  },
  publisher: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Publisher",
  },
});
