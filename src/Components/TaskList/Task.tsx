import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { transformDate } from '../../Helpers';
import type { RootState } from '../../app/store'
import { TaskObject } from '../../interface';
import { useDispatch, useSelector } from 'react-redux';
import { doneTask, archiveTask } from '../../features/tasks/TaskSlice';
import { setId, setComplexity, setDate, setTitle, setInfo, setShow, setEdit, setShowInfo} from '../../features/tasks/GlobalSlice'
import { selectComplexityColor } from '../../Helpers';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';

interface Props {
  task: TaskObject;
}

const Task = ({ task }: Props) => {
  const {attributes, listeners, setNodeRef, setDraggableNodeRef, transform, transition} = useSortable({id: task.id})

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

  const tasksState = useSelector((state: RootState) => state.tasks.value)
  const dispatch = useDispatch()

  const handleShowInfo = (id:string) => {
    let task = tasksState.find(x => x.id === id)  
    if (task) {
      dispatch(setId(id));
      dispatch(setTitle(task.title));
      dispatch(setInfo(task.information));
      dispatch(setDate(transformDate(task.task_date)));
      dispatch(setComplexity(task.complexity));
      dispatch(setShowInfo(true));
    }  
  }

  const editTask: any = async (id: string) => {
    dispatch(setEdit(true));
    let task = tasksState.find(x => x.id === id)        
    if (task) {
        dispatch(setId(id));
        dispatch(setTitle(task.title));
        dispatch(setInfo(task.information));
        dispatch(setDate(transformDate(task.task_date)));
        dispatch(setComplexity(task.complexity));
        dispatch(setShow(true));
    }
  };

  return (
      <div
      ref={setNodeRef}
      {...attributes} 
      style={style}
      className={`card-self position-relative bg-secondary bg-opacity-25 rounded-end border-${selectComplexityColor(task.complexity)}`}
      >
        <div className='position-absolute move-button rounded-start' {...listeners}></div>
        <Button
      variant="success"
          data-key={task.id}
          onClick={(e) => dispatch(doneTask(task.id))}
          className={`position-absolute top-0 mt-1 ms-4`}
        >
          <Icon.FolderFill size={15} />
        </Button>
        
        <Button
          variant="danger"
          data-key={task.id}
          onClick={(e) => dispatch(archiveTask(task.id))}
          className="position-absolute top-0 end-0 m-1"
          >
            <Icon.TrashFill size={15} />
        </Button>
        <Button
          variant="warning"
          data-key={task.id}
          onClick={e=> editTask(task.id)}
          className="position-absolute bottom-0 end-0 me-1 mb-4"
        ><Icon.PencilFill size={15} />
        </Button>
          
        <h6 className="text-start ms-2">{task.title?.substring(0, 15)}...</h6>
        <p className="text-start ms-2">
          {task.information?.substring(0, 20)}...
        </p>
        <p className="text-start text-muted ms-2">
          finish before: {task.task_date}
        </p>
        <p className="text-start text-muted ms-2" onClick={e=>{handleShowInfo(task.id)}}>Ver full description</p>
      </div>
  );
};

export default Task;
