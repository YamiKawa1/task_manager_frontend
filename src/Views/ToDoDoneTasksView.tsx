import React from 'react'
import Task from '../Components/TaskList/Task'
import DoneTask from '../Components/TaskList/DoneTask'
import { TaskObject } from '../interface'

interface Props {
  tasks: Array<TaskObject>;
  doneTasks: Array<TaskObject>;
}

const ToDoDoneTasksView = ({tasks, doneTasks }:Props) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col bg-warning bg-opacity-10'>
        <Task TaskInfo = {tasks} />
        </div>

        <div className='col bg-success bg-opacity-10'>
         <DoneTask TaskInfo = {doneTasks} />
        </div>
      </div>
    </div>
  )
}

export default ToDoDoneTasksView