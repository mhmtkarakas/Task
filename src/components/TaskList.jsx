import React from 'react'
import TaskShow from './TaskShow'

const TaskList = ({tasks,onDelete,onUpdate}) => {
  return (
    <div className='task-list'>
       {
        tasks.map((task,index)=>(
            <TaskShow onDelete={onDelete} key={index} task={task} onUpdate={onUpdate} />
        ))
       } 
    </div>
  )
}

export default TaskList