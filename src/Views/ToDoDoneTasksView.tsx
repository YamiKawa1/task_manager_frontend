import React from 'react'
import Task from '../Components/TaskList/Task'
import DoneTask from '../Components/TaskList/DoneTask'
import { TaskObject } from '../interface'
import {DndContext, closestCenter} from '@dnd-kit/core';
import { arrayMove, SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useSelector } from 'react-redux';
import type { RootState } from '../app/store'

interface Props {
  tasks: Array<TaskObject>;
  setTasks: any;
  doneTasks: Array<TaskObject>;
  setDoneTasks: any;
}

const ToDoDoneTasksView = ({ tasks, setTasks, doneTasks, setDoneTasks }:Props) => {
  const taksId = tasks.map(x=> {return x.id})
  const doneTaksId = doneTasks.map(x=> {return x.id})
  
  function handleTaskDragEnd(e:any) {
    const {active, over} = e;    

    if (active.id !== over.id) {

      setTasks((items:any) => {
        let ids = items.map((element:any) => {return element.id})
        const activeIndex = ids.indexOf(active.id);
        const overIndex = ids.indexOf(over.id);
        return arrayMove(items, activeIndex, overIndex);
      })
      }
    }

  function handleDoneTaskDragEnd(e:any) {
    const {active, over} = e;

    if (active.id !== over.id) {

      setDoneTasks((items:any) => {
        let ids = items.map((element:any) => {return element.id})
        
        const activeIndex = ids.indexOf(active.id);
        const overIndex = ids.indexOf(over.id);

        return arrayMove(items, activeIndex, overIndex);
      })   
    }
  }

  

  return (

        <div className='container'>
          <div className='row'>
          <DndContext 
          collisionDetection={closestCenter} 
          onDragEnd={handleTaskDragEnd}
          >
            <div  className='col bg-warning bg-opacity-10'>
            <h1 className='text-start text-muted'>To Do Tasks</h1>

            <SortableContext 
            items={taksId}
            >
              <div className="d-inline-flex flex-wrap justify-content-between">
                {tasks.map(element => {return <Task key={element.id} task = {element} />})}
              </div>
            </SortableContext>
            </div>
          </DndContext>
          <DndContext 
          collisionDetection={closestCenter} 
          onDragEnd={handleDoneTaskDragEnd}
          >
            <div className='col bg-success bg-opacity-10'>
            <h1 className='text-start text-muted'>Done Tasks</h1>

            <SortableContext 
            items={doneTaksId}
            >
              <div className="d-inline-flex flex-wrap justify-content-between">
               {doneTasks.map(element => {return <DoneTask key={element.id} task = {element} />})}
              </div>
            </SortableContext>
            </div>
          </DndContext>

          </div>
        </div>
    
  )
}

export default ToDoDoneTasksView