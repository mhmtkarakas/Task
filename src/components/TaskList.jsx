import React from 'react'
import TaskShow from './TaskShow'

const TaskList = ({tasks,onDelete}) => {
  return (
    <div className='task-list'>
       {
        tasks.map((task,index)=>(
            <TaskShow onDelete={onDelete} key={index} task={task} />
        ))
       } 
    </div>
  )
}

export default TaskList