import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './App.css';
import type { RootState } from './app/store'
import { TaskObject } from './interface';
import CreateTaskForm from './Components/TaskList/CreateTaskForm';
import ToDoDoneTasksView from './Views/ToDoDoneTasksView';
import ArchivedTaskView from './Views/ArchivedTaskView';
import { setShow } from './features/tasks/GlobalSlice';
import { setItem } from './Helpers/localstorage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Views/Layout';

export function App() {
  const tasksState = useSelector((state: RootState) => state.tasks.value);
  const dispatch = useDispatch();  
  console.log('tasksState', tasksState);

  const [tasks, setTasks] = useState<Array<TaskObject>>([]);
  const [doneTasks, setDoneTasks] = useState<Array<TaskObject>>([]);
  const [archivedTasks, setArchivedTasks] = useState<Array<TaskObject>>([]);

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

  useEffect(() => {
    setItem('tasks', tasksState)
    loadingTask();
  }, [tasksState]);

  // const handleShow = () => dispatch(setShow(true));


  return (
    <div className="App container">
      <Layout />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="tododone" element={<ToDoDoneTasksView tasks={tasks} doneTasks={doneTasks} />} />
            <Route path="archived" element={<ArchivedTaskView archivedTasks={archivedTasks} />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <CreateTaskForm />
      {/* <ToDoDoneTasksView tasks={tasks} doneTasks={doneTasks} />
      <ArchivedTaskView archivedTasks={archivedTasks} /> */}
    </div>
  );
}
