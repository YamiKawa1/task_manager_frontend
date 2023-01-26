import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { patchArchiveTask, patchDoneTask, getTaskById} from '../../API'
import { TaskObject, StateInfoObject } from '../../interface';
import { transformDate } from '../../Helpers';

interface Props {
  TaskInfo: Array<{
    id: number;
    title?: string;
    information?: string;
    task_date?: string;
    complexity?: string;
    done: boolean;
    archived: boolean;
    created_at?: Date;
    updated_at?: Date;
  }>;
  loading: any;
  setShow:any;
  stateInfo: StateInfoObject;
}

const getTime = (task_date?: string): string => {
  const actual = Date();
  // console.log(task_date, actual)
  return '';
};

const DoneTask = ({ TaskInfo, loading, setShow, stateInfo }: Props) => {

  const handleShow = () => setShow(true);

  const archiveTask: any = async (id: number) => {
    const res = await patchArchiveTask(id);
    console.log(res.message);
    loading();
  };
  
  const doneTask: any = async (id: number) => {
    const res = await patchDoneTask(id);
    console.log(res.message);
    loading();
  };

  const editTask: any = async (id: number) => {
    stateInfo.setEdit(true);
    const res = await getTaskById(id);
    console.log(transformDate(res.task_date));
    
    stateInfo.setId(id);
    stateInfo.setTitle(res.title);
    stateInfo.setInfo(res.information);
    stateInfo.setDate(transformDate(res.task_date));
    stateInfo.setComplexity(res.complexity);

    handleShow()
  };



  return (
    <ul className="d-inline-flex flex-wrap">
      {TaskInfo.map((task) => {
        return (
          <li
            key={task.id}
            className={`position-relative bg-success bg-opacity-10`}
          >
            <Button
              variant="success"
              data-key={task.id}
              onClick={(e) => doneTask(task.id)}
              className={`position-absolute top-0 ${task.done ? 'end-0 m-1' : 'mt-1 ms-4'}`}
            >
              <Icon.FolderFill size={15} />
            </Button>
            
            {task.done 
            ? null
            : <Button
              variant="danger"
              data-key={task.id}
              onClick={(e) => archiveTask(task.id)}
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
              falta: {getTime(task.task_date)}
            </p>
          </li>
        );
      })}
    </ul>
  );
};

export default DoneTask;
