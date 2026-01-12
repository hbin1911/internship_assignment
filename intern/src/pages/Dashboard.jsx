import { useEffect, useState } from "react";
import api from "../api/axios";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await api.get("/tasks");
    setTasks(res.data);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const addTask = async () => {
    await api.post("/tasks", { title });
    setTitle("");
    loadTasks();
  };

  const removeTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>

      {tasks.map((t) => (
        <div key={t._id}>
          {t.title}
          <button onClick={() => removeTask(t._id)}>X</button>
        </div>
      ))}
    </div>
  );
}
