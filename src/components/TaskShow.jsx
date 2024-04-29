import React, { useState } from "react";
import TaskCreate from './TaskCreate';

const TaskShow = ({ task, onDelete }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    onDelete(task.id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskformUpdate={true} />
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
