import React from 'react'

const TaskCreate = () => {
  return (
    <div className='task-create'>
        <h3>Lutfen Task Giriniz</h3>
       <form className='task-form'>
        <label>Baslik</label>
        <input />
        <label>Task Giriniz</label>
        <textarea rows={5} />
        <button>Olustur</button>
       </form>
    </div>
  )
}

export default TaskCreate