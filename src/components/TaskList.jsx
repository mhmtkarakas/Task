import React from 'react'
import TaskShow from './TaskShow'

const TaskList = ({tasks}) => {
  return (
    <div className='task-list'>
       {
        tasks.map((task,index)=>(
            <TaskShow key={index} task={task} />
        ))
       } 
    </div>
  )
}

export default TaskList