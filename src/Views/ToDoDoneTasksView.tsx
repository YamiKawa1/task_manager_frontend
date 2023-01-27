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
    <div className='container d-flex flex-row justify-content-center'>
      <div className='bg-warning bg-opacity-10 flex-fill'>
        <Task TaskInfo = {tasks} />
      </div>
      <div className='bg-success bg-opacity-10 flex-fill'>
        <DoneTask TaskInfo = {doneTasks} />
      </div>
    </div>
  )
}

export default ToDoDoneTasksView