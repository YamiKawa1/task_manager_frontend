import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { TaskObject } from '../../interface';
import { useDispatch } from 'react-redux';
import { undoneTask } from '../../features/tasks/TaskSlice';
import { selectComplexityColor } from '../../Helpers';

interface Props {
  TaskInfo: Array<TaskObject>;
}

const DoneTask = ({ TaskInfo }: Props) => {

  const dispatch = useDispatch();
  return (
    <ul className="d-inline-flex flex-wrap">
      {TaskInfo.map((task) => {
        return (
          <li
            key={task.id}
            className={`position-relative bg-secondary bg-opacity-25 border border-3 border-${selectComplexityColor(task.complexity)}`}
          >
            <Button
              variant="success"
              data-key={task.id}
              onClick={(e) => dispatch(undoneTask(task.id))}
              className="position-absolute top-0 end-0 m-1"
            >
              <Icon.ArrowRepeat size={15} />
            </Button> 
            <h6 className="text-start ms-2 mt-1">{task.title?.substring(0, 15)}...</h6>
            <p className="text-start ms-2">
              {task.information?.substring(0, 20)}...
            </p>
            <p className="text-start text-muted ms-2">
              Done
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default DoneTask;
