
import { useState } from 'react';
import './App.css';
import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';

function App() {
  const [tasks,setTasks] = useState([])
   const createTask = (title,desc) => {
        let createTasks = [
          ...tasks, {
            id:String(new Date().getTime()),
            title,
            desc
          }
        ]
        setTasks(createTasks)
   }
  return (
    <div className="App">
     <TaskCreate onCreate={createTask} />
     <h1>Gorevler</h1>
     <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
