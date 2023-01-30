import { SortableContext } from '@dnd-kit/sortable';
import React from 'react'
import ArchivedTask from '../Components/TaskList/ArchivedTask'
import { TaskObject } from '../interface'
import {DndContext, closestCenter} from '@dnd-kit/core';

interface Props {
  archivedTasks: Array<TaskObject>;
}

function handleDragEnd(e:any) {
  console.log('drag end called');
  
}

const ArchivedTaskView = ({archivedTasks}: Props) => {
  const archivedTasksId = archivedTasks.map(element=> {return element.id})
  return (
    <DndContext
    collisionDetection={closestCenter} 
    onDragEnd={handleDragEnd}
    >
      <div className='container'>
        <div className='row'>
          <div className='bg-danger bg-opacity-10'>
            <h1 className='text-start text-muted'>Archived Tasks</h1>
            <SortableContext 
            items={archivedTasksId}
            >
              <div className="d-inline-flex flex-wrap justify-content-between">
                {archivedTasks.map(element => {return <ArchivedTask key={element.id} task = {element} />})}
              </div>
            </SortableContext>
          </div>
        </div>
      </div>
    </DndContext>
  );
}

export default ArchivedTaskView