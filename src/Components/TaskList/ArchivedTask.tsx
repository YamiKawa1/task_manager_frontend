import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { TaskObject } from '../../interface';
import { deleteTask, restoreTask } from '../../features/tasks/taskSlice';
import { useDispatch } from 'react-redux';

interface Props {
  TaskInfo: Array<TaskObject>;
  loading: any;
}

const ArchivedTask = ({ TaskInfo, loading }: Props) => {
  const dispatch = useDispatch();

  return (
    <ul className="d-inline-flex flex-wrap">
      {TaskInfo.map((task) => {
        return (
          <li
            key={task.id}
            className={`position-relative bg-danger bg-opacity-10`}
          >
            <Button
              variant="success"
              onClick={(e) => dispatch(restoreTask(task.id))}
              className="position-absolute bot-100 end-0 m-1"
            >
              <Icon.Recycle size={15} />
            </Button>
            
            {task.done 
            ? null
            : <Button
              variant="danger"
              onClick={(e) => dispatch(deleteTask(task.id))}
              className="position-absolute bottom-0 end-0 m-1"
              >
                <Icon.TrashFill size={15} />
              </Button> 
              }
            <h6 className="text-start ms-2 mt-1">{task.title?.substring(0, 15)}...</h6>
            <p className="text-start ms-2">
              {task.information?.substring(0, 20)}...
            </p>
            <p className="text-start text-muted ms-2">
              Archivada
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default ArchivedTask;
