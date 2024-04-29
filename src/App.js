import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, desc) => {
    let createTasks = [
      ...tasks,
      {
        id: String(new Date().getTime()),
        title,
        desc,
      },
    ];
    setTasks(createTasks);
  };

  const onDeleteById = (id) => {
    const deleteProcess = tasks.filter((task) => task.id !== id);
    setTasks(deleteProcess);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Gorevler</h1>
      <TaskList onDelete={onDeleteById} tasks={tasks} />
    </div>
  );
}

export default App;
