import React, { useState, useEffect } from 'react';
import './App.css';

import { TaskObject } from './interface';
import { getTasks } from './API';

import CreateTaskForm from './Components/TaskList/CreateTaskForm';
import ArchiveSwitch from './Components/NavBar/ArchiveSwitch';
import ListTask from './Components/TaskList/ListTask';

export function App() {
  const [tasks, setTasks] = useState<Array<TaskObject>>([]);
  const [doneTasks, setDoneTasks] = useState<Array<TaskObject>>([]);
  const [archivedTasks, setArchivedTasks] = useState<Array<TaskObject>>([]);

  useEffect(() => {
    loadingTask();
  }, []);

  const loadingTask = async () => {
    const res = await getTasks();
    const doneTasks: Array<TaskObject> = [];
    const archivedTasks: Array<TaskObject> = [];
    const restTask: Array<TaskObject> = [];

    res.forEach((task: TaskObject) => {
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
      <ArchiveSwitch />
      <CreateTaskForm loading={loadingTask} />
      <ListTask
        tasks={tasks}
        doneTasks={doneTasks}
        archivedTasks={archivedTasks}
      />
    </div>
  );
}
