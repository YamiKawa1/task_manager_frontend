import React from 'react'
import ArchivedTask from '../Components/TaskList/ArchivedTask'
import { TaskObject } from '../interface'

interface Props {
  archivedTasks: Array<TaskObject>;
}

const ArchivedTaskView = ({archivedTasks}: Props) => {
  return (
<div className='container'>
  <div className='row'>
    <div className='bg-danger bg-opacity-10'>
      <ArchivedTask TaskInfo={archivedTasks}/>
    </div>
  </div>
</div>
  );
}

export default ArchivedTaskView