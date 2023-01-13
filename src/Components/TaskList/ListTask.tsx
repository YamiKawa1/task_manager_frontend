import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Task from './Task';
import CreateTaskForm from './CreateTaskForm'
import {getTasks} from '../../API'

interface TaskObject {
  id:number
  title?:string 
  information?:string 
  task_date?:Date
  complexity?:string 
  done:boolean
  archived:boolean
  created_at?:Date
  updated_at?:Date
}


const ListTask: React.FC = () => {
    const [tasks, setTasks] = useState<Array<TaskObject>>([]);
    const [doneTasks, setDoneTasks] = useState<Array<TaskObject>>([]);
    const [archivedTasks, setArchivedTasks]= useState<Array<TaskObject>>([]);
    const baseURL = 'http://127.0.0.1:4000/tasks'

    // useEffect(async () => {
    //   let res = await getTasks(baseURL)
    // }, [])

    // useEffect(async () => {
    //   let res = await getTasks(baseURL)
    // }, [])
const chargeTask = async() => {
  const res = await getTasks(baseURL)
  console.log(res);
    const doneTasks:Array<TaskObject> = [] 
    const archivedTasks:Array<TaskObject> = []
    const restTask:Array<TaskObject> = []

    res.forEach((task: TaskObject) => {            
      if (task.done) {
        doneTasks.push(task);

      } else if (!task.done && task.archived) {
        archivedTasks.push(task)
        
      } else if(!task.archived && !task.done) {
        restTask.push(task)
      }
    })
    setTasks(restTask);
    setDoneTasks(doneTasks);
    setArchivedTasks(archivedTasks);
}

chargeTask();
//   res.forEach((task: TaskObject) => {            
//     if (task.done) {
//       setDoneTasks([...doneTasks, task]);

//     } else if (!task.done && task.archived) {
//       setArchivedTasks([...archivedTasks, task]);
      
//     } else if(!task.archived && !task.done) {
//       setTasks([...tasks, task]);
//     }
//   })
// }

  

// getTasks{
//   const doneTasks:Array<TaskObject> = [] 
//   const archivedTasks:Array<TaskObject> = []
//   const restTask:Array<TaskObject> = []

//   receivedTasks.forEach((task: TaskObject) => {            
//     if (task.done) {
//       doneTasks.push(task);

//     } else if (!task.done && task.archived) {
//       archivedTasks.push(task)
      
//     } else if(!task.archived && !task.done) {
//       restTask.push(task)
//     }
//   })
//   setTasks(restTask);
//   setDoneTasks(doneTasks);
//   setArchivedTasks(archivedTasks);
// }
    // useEffect(() => {
    //     axios.get(baseURL).then((response) => {



    //     });
    // }, [tasks, doneTasks, archivedTasks]);
 
    // if (!tasks) return null;
    // console.log(post);
  
    return (
      <div>
        <CreateTaskForm/>
        <Task TaskInfo={tasks} color='warning'/>
        <Task TaskInfo={doneTasks} color='success'/>
        <Task TaskInfo={archivedTasks} color='danger'/>
      </div>
    );
  }
  
export default ListTask;
