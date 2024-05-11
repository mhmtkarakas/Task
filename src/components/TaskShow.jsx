import React, { useState } from "react";
import TaskCreate from './TaskCreate';
import TasksContext from "../context/task";
import { useContext } from 'react'; 

const TaskShow = ({ task }) => {

  const { onDeleteById,editTaskById}=useContext(TasksContext);

  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    //onDelete(task.id);
    onDeleteById(task.id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  //onUpdate propsu ile gonderdigimiz parametreleri handleSubmit fonksiyonumuzda karsilariz ve bunlari da olusturacagimiz
  // bir props ile bir ust komponentimize gondeririz.
  const handleSubmit = (id,updatedTask,updatedTaskDesc) => {
    setShowEdit(false); // Guncelleme gerceklesti setShowEdit false olur.
    //onUpdate(id,updatedTask,updatedTaskDesc);
    editTaskById(id,updatedTask,updatedTaskDesc);
  }
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} onUpdate={handleSubmit}  />// Gucellemeyi bitirdigimizde showEdit i false yapmamiz gerekir ve propslarimizi bir ust komponentimize tasimaliyiz. Bunu handleSubmit fonksiyonu ile gerceklestirecegiz
      ) : (
        <div>
          <h3>Goreviniz</h3>
          <p>{task.title}</p>
          <h3>Yapilacaklar</h3>
          <p>{task.desc}</p>
          <div>
            <button className="b-delete" onClick={handleDelete}>
              Sil
            </button>
            <button className="b-edit" onClick={handleEdit}>
              Guncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskShow;
