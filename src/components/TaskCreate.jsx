import React, { useState } from "react";

const TaskCreate = ({onCreate}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title,desc);
        setTitle("");
        setDesc("");
    }
  return (
    <div className="task-create">
      <h3>Lutfen Task Giriniz</h3>
      <form className="task-form">
        <label>Baslik</label>

        <input value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label>Task Giriniz</label>
        <textarea value={desc} onChange={(e)=>setDesc(e.target.value)} rows={5} />
        <button onClick={handleSubmit}>Olustur</button>
      </form>
    </div>
  );
};

export default TaskCreate;
