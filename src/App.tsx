import React, { useState, useEffect } from 'react';
import {useSelector} from 'react-redux'
import { Button } from 'react-bootstrap';
import './App.css';
import type { RootState } from './app/store'
import { TaskObject, StateInfoObject } from './interface';
import CreateTaskForm from './Components/TaskList/CreateTaskForm';
import ListTask from './Components/TaskList/ListTask';

export function App() {
  const tasksState = useSelector((state: RootState) => state.tasks.value)
  console.log('taskState', tasksState);
  
  const [show, setShow] = useState<boolean>(false);
  const [edit, setEdit] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Array<TaskObject>>([]);
  const [doneTasks, setDoneTasks] = useState<Array<TaskObject>>([]);
  const [archivedTasks, setArchivedTasks] = useState<Array<TaskObject>>([]);
  const [id, setId] = useState<number>(NaN);
  const [title, setTitle] = useState<string>('');
  const [info, setInfo] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [complexity, setComplexity] = useState<string>('');



  const stateInfo:StateInfoObject = {
    id: id,
    setId: setId,
    title: title,
    setTitle: setTitle,
    info: info,
    setInfo: setInfo,
    date: date,
    setDate: setDate,
    complexity: complexity,
    setComplexity: setComplexity,
    edit: edit,
    setEdit: setEdit, 
  }

  useEffect(() => {
    loadingTask();
  }, []);

  const handleShow = () => setShow(true);

  const loadingTask = async () => {
    
    const doneTasks: Array<TaskObject> = [];
    const archivedTasks: Array<TaskObject> = [];
    const restTask: Array<TaskObject> = [];

    tasksState.forEach((task: TaskObject) => {
      if (task.done) {
        doneTasks.push(task);
      } else if (!task.done && task.archived) {
        archivedTasks.push(task);
      } else if (!task.archived && !task.done) {
        restTask.push(task);
      }
    });
    setTasks(restTask);
    setDoneTasks(doneTasks);
    setArchivedTasks(archivedTasks);
  };

  return (
    <div className="App container">
      <Button variant="success" onClick={handleShow}>
        Create New Task
      </Button>

      <CreateTaskForm 
      loading={loadingTask}
      show={show} 
      setShow={setShow}
      stateInfo={stateInfo}
       />
      <ListTask
        setShow={setShow}
        tasks={tasks}
        doneTasks={doneTasks}
        archivedTasks={archivedTasks}
        loading={loadingTask}
        stateInfo={stateInfo}
      />
    </div>
  );
}
