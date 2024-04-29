import React, { useState } from "react";

const TaskCreate = ({ onCreate, task, taskformUpdate }) => {
  const [title, setTitle] = useState(task ? task.title : "" );
  const [desc, setDesc] = useState(task ? task.desc : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, desc);
    setTitle("");
    setDesc("");
  };
  return (
    <div >
      {taskformUpdate ? (
        <div className="task-update">
          <h3>Lutfen Guncelleme Yapiniz!</h3>
          <form className="task-form">
            <label>Baslik Guncelle</label>

            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Task Guncelle</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={5}
            />
            <button onClick={handleSubmit}>Olustur</button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lutfen Task Giriniz</h3>
          <form className="task-form">
            <label>Baslik</label>

            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <label>Task Giriniz</label>
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              rows={5}
            />
            <button onClick={handleSubmit}>Olustur</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskCreate;
