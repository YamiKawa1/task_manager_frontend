import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { transformDate } from '../../Helpers';
import type { RootState } from '../../app/store'
import { TaskObject } from '../../interface';
import { useDispatch, useSelector } from 'react-redux';
import { doneTask, archiveTask } from '../../features/tasks/TaskSlice';
import { setId, setComplexity, setDate, setTitle, setInfo, setShow, setEdit } from '../../features/tasks/GlobalSlice'
import { selectComplexityColor } from '../../Helpers';

interface Props {
  TaskInfo: Array<TaskObject>;
}

const Task = ({ TaskInfo }: Props) => {
  const tasksState = useSelector((state: RootState) => state.tasks.value)
  const dispatch = useDispatch()

  const handleShow = () => dispatch(setShow(true));  

  const editTask: any = async (id: string) => {
    dispatch(setEdit(true));
    let task = tasksState.find(x => x.id === id)        
    if (task) {
        dispatch(setId(id));
        dispatch(setTitle(task.title));
        dispatch(setInfo(task.information));
        dispatch(setDate(transformDate(task.task_date)));
        dispatch(setComplexity(task.complexity));
      handleShow()
    }
  };

  return (
    <ul className="d-inline-flex flex-wrap position-relative">
      {TaskInfo.map((task) => {
        return (
          <li
            key={task.id}
            className={`position-relative bg-secondary bg-opacity-25 border border-3 border-${selectComplexityColor(task.complexity)}`}
          >
            <Button
              variant="success"
              data-key={task.id}
              onClick={(e) => dispatch(doneTask(task.id))}
              className={`position-absolute top-0 ${task.done ? 'end-0 m-1' : 'mt-1 ms-4'}`}
            >
              <Icon.FolderFill size={15} />
            </Button>
            
            {task.done 
            ? null
            : <Button
              variant="danger"
              data-key={task.id}
              onClick={(e) => dispatch(archiveTask(task.id))}
              className="position-absolute top-0 end-0 m-1"
              >
                <Icon.TrashFill size={15} />
              </Button> 
              }
            <Button
              variant="warning"
              data-key={task.id}
              onClick={e=> editTask(task.id)}
              className="position-absolute bottom-0 end-0 m-1"
            ><Icon.PencilFill size={15} />
            </Button>
              
            <h6 className="text-start ms-2 mt-1">{task.title?.substring(0, 15)}...</h6>
            <p className="text-start ms-2">
              {task.information?.substring(0, 20)}...
            </p>
            <p className="text-start text-muted ms-2">
              finish before: {task.task_date}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default Task;
