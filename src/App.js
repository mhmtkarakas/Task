import { useEffect,useContext } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import TasksContext from "./context/task";



function App() {
 const {fetchTask}=useContext(TasksContext);
  useEffect(()=>{
    fetchTask();
  },[])

  return (
    <div className="App">
      <TaskCreate />
      <h1>Gorevler</h1>
      {/* onUpdate propu ile 3 adet parametre gelecek ve editTaskById metodu ile guncelleme islemini yapacagiz. */}
      <TaskList/>
    </div>
  );
}

export default App;
