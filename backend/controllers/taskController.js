import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user._id });
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const task = await Task.create({
    user: req.user._id,
    title: req.body.title
  });
  res.status(201).json(task);
};

export const deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task removed" });
};
