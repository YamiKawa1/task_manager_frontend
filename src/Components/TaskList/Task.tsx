import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

interface Props {
  TaskInfo: Array<{
    id: number;
    title?: string;
    information?: string;
    task_date?: Date;
    complexity?: string;
    done: boolean;
    archived: boolean;
    created_at?: Date;
    updated_at?: Date;
  }>;
  color: string;
}

const archiveTask = (id: number): any => {
  const baseURL = `http://127.0.0.1:3333/tasks/archive/${id}`;
  console.log(id);
  axios.patch(baseURL).then((response) => {
    console.log(response.data.message);
  });
};

const editTask = (id: number): any => {};

const getTime = (task_date?: Date): string => {
  const actual = Date();
  // console.log(task_date, actual)
  return '';
};

const Task = ({ TaskInfo, color }: Props) => {
  return (
    <ul className="d-inline-flex flex-wrap">
      {TaskInfo.map((task) => {
        return (
          <li
            key={task.id}
            className={`position-relative bg-${color} bg-opacity-10`}
          >
            <Button
              variant="danger"
              data-key={task.id}
              onClick={(e) => archiveTask(task.id)}
              className="position-absolute top-0 end-0 m-1"
            >
              <Icon.TrashFill size={15} />
            </Button>
            <Button
              variant="warning"
              data-key={task.id}
              onClick={(e) => editTask(task.id)}
              className="position-absolute bottom-0 end-0 m-1"
            >
              <Icon.PencilFill size={15} />
            </Button>
            <h6 className="text-start ms-2 mt-1">{task.title}</h6>
            <p className="text-start ms-2">
              {task.information?.substring(0, 20)}...
            </p>
            <p className="text-start text-muted ms-2">
              falta: {getTime(task.task_date)}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Task;
