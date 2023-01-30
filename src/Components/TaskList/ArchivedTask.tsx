import React from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { TaskObject } from '../../interface';
import { deleteTask, restoreTask } from '../../features/tasks/TaskSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectComplexityColor } from '../../Helpers';
import { CSS } from '@dnd-kit/utilities';
import { useSortable } from '@dnd-kit/sortable';
import type { RootState } from '../../app/store';
import { setId, setTitle, setInfo, setDate, setComplexity, setShowInfo} from '../../features/tasks/GlobalSlice';
import { transformDate } from '../../Helpers';

interface Props {
  task: TaskObject;
}

const ArchivedTask = ({ task }: Props) => {
  const dispatch = useDispatch();
  const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: task.id})
  const tasksState = useSelector((state: RootState) => state.tasks.value)

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  }

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

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      className={`card-self position-relative bg-secondary bg-opacity-25 rounded-end border-${selectComplexityColor(task.complexity)}`}
    >
      <div className='position-absolute move-button rounded-start' {...listeners}></div>
      <Button
        variant="success"
        onClick={(e) => dispatch(restoreTask(task.id))}
        className="position-absolute bot-100 end-0 m-1"
      >
        <Icon.Recycle size={15} />
      </Button>
      <Button
      variant="danger"
      onClick={(e) => dispatch(deleteTask(task.id))}
      className="position-absolute bottom-0 end-0 m-1"
      >
        <Icon.TrashFill size={15} />
      </Button> 
      <h6 className="text-start ms-2 mt-1">{task.title?.substring(0, 15)}...</h6>
      <p className="text-start ms-2">
        {task.information?.substring(0, 20)}...
      </p>
      <p className="text-start text-muted ms-2">
        Archivada
      </p>
      <p className="text-start text-muted ms-2" onClick={e=>{handleShowInfo(task.id)}}>Ver full description</p>
    </div>
  );
};

export default ArchivedTask;
