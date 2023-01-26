import React from 'react';
import Task from './Task';
import DoneTask from './DoneTask';
import ArchivedTask from './ArchivedTask';
import { TaskObject, StateInfoObject } from '../../interface';
import {useSelector} from 'react-redux'
import type { RootState } from '../../app/store'


interface Props {
  tasks: Array<TaskObject>;
  doneTasks: Array<TaskObject>;
  archivedTasks: Array<TaskObject>;
  loading:any;
  setShow:any;
  stateInfo:StateInfoObject;
}

function ListTask({ tasks, doneTasks, archivedTasks, loading, setShow, stateInfo }: Props): JSX.Element {
  const taskss = useSelector((state: RootState) => state.tasks.value)
  console.log(taskss);
  
  return (
    <div>
      <Task TaskInfo={tasks} loading={loading} setShow={setShow} stateInfo={stateInfo}/>
      <DoneTask TaskInfo={doneTasks} loading={loading} setShow={setShow} stateInfo={stateInfo}/>
      <ArchivedTask TaskInfo={archivedTasks} loading={loading} setShow={setShow} stateInfo={stateInfo}/>
    </div>
  );
}

export default ListTask;
