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
  // Guncellem islemini yapacagimiz metodumuzda gonderdigimiz parametreleri karsilariz.
  const editTaskById = (id, updatedTask, updatedTaskDesc) => {
    // Guncelleme isleminde arrayin icindeki elemanlari tek tek donecegiz sonra bana gelen id degerine gore guncelleyecegimiz elemani bulacagiz.
    // Buldugumuz elemani parametreler ile yeni gelen baslik ve desc ile degistirecegiz ve elemanlari yeniden tek tek donecegiz ve yeni bir array e atayacagiz.
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {id,title:updatedTask, desc: updatedTaskDesc}
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Gorevler</h1>
      {/* onUpdate propu ile 3 adet parametre gelecek ve editTaskById metodu ile guncelleme islemini yapacagiz. */}
      <TaskList onDelete={onDeleteById} tasks={tasks} onUpdate={editTaskById} />
    </div>
  );
}

export default App;
