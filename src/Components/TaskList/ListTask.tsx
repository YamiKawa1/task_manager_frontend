import React from 'react';
import Task from './Task';
import { TaskObject } from '../../interface';

interface Props {
  tasks: Array<TaskObject>;
  doneTasks: Array<TaskObject>;
  archivedTasks: Array<TaskObject>;
}

function ListTask({ tasks, doneTasks, archivedTasks }: Props): JSX.Element {
  return (
    <div>
      <Task TaskInfo={tasks} color="warning" />
      <Task TaskInfo={doneTasks} color="success" />
      <Task TaskInfo={archivedTasks} color="danger" />
    </div>
  );
}

export default ListTask;
