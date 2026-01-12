import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    title: { type: String, required: true },
    completed: { type: Boolean, default: false }
  },
  { timestamps: true }
);

export default mongoose.model("Task", taskSchema);
