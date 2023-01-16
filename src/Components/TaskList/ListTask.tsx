import React from 'react';
import Task from './Task';
import { TaskObject, StateInfoObject } from '../../interface';

interface Props {
  tasks: Array<TaskObject>;
  doneTasks: Array<TaskObject>;
  archivedTasks: Array<TaskObject>;
  loading:any;
  setShow:any;
  stateInfo:StateInfoObject;
}

function ListTask({ tasks, doneTasks, archivedTasks, loading, setShow, stateInfo }: Props): JSX.Element {
  return (
    <div>
      <Task TaskInfo={tasks} color="warning" loading={loading} setShow={setShow} stateInfo={stateInfo}/>
      <Task TaskInfo={doneTasks} color="success" loading={loading} setShow={setShow} stateInfo={stateInfo}/>
      <Task TaskInfo={archivedTasks} color="danger" loading={loading} setShow={setShow} stateInfo={stateInfo}/>
    </div>
  );
}

export default ListTask;
