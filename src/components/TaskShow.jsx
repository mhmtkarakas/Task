import React from 'react'

const TaskShow = ({task}) => {
    
  return (
    <div className='task-show'>
       <h3>Goreviniz</h3>
       <p>{task.title}</p>
       <h3>Yapilacaklar</h3>
       <p>{task.desc}</p>
       <div>
        <button className='b-delete'>Sil</button>
        <button className='b-edit'>Guncelle</button>
       </div>
    </div>
  )
}

export default TaskShow