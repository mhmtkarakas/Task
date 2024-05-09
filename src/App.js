import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
// axios post islemi yapilir
  const createTask =async (title, desc) => {
   const response =await axios.post("http://localhost:3004/posts",{
    id: String(new Date().getTime()),
    title,
    desc,
   });
  // console.log(response);
    let createTasks = [
      ...tasks,
      response.data
    ];
    setTasks(createTasks);
  };
  // axios get islemi yapilir
  const fetchTask = async() =>{
    const response = await axios.get("http://localhost:3004/posts");
    console.log(response);
    setTasks(response.data);
  }
  useEffect(()=>{
    fetchTask();
  },[])
  // delete islemini burada yapariz.
  const onDeleteById = async (id) => {
     await axios.delete(`http://localhost:3004/posts/${id}`);
    const deleteProcess = tasks.filter((task) => task.id !== id);
    setTasks(deleteProcess);
  };
  // Guncellem islemini yapacagimiz metodumuzda gonderdigimiz parametreleri karsilariz.
  const editTaskById =async (id, updatedTask, updatedTaskDesc) => {
  await axios.put(`http://localhost:3004/posts/${id}`,{
    title:updatedTask,
    desc: updatedTaskDesc
  });
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
