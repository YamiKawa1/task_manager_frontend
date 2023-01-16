import axios from 'axios';
import { TaskCreate } from '../interface';

export const getTasks = async () => {
  const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/tasks`);
  return res.data.data;
};

export const getTaskById = async (id: number) => {
  const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/tasks/${id}`);  
  console.log(res);
  
  return res.data.data;
}

export const postCreateTask = async (body: TaskCreate) => {
  const res = await axios.post(
    `${process.env.REACT_APP_URL_BACKEND}/tasks`,
    body
  );
  return res.data.data;
};

export const patchArchiveTask = async(id: number) => {
  const baseURL = `${process.env.REACT_APP_URL_BACKEND}/tasks/archive/${id}`;
  const res = await axios.patch(baseURL)

  return res.data
}

export const patchDoneTask = async(id: number) => {
  const baseURL = `${process.env.REACT_APP_URL_BACKEND}/tasks/done/${id}`;
  const res = await axios.patch(baseURL)

  return res.data
}

export const patchUpdateTask = async(id:number, body:TaskCreate) => {
  const res = await axios.patch(
    `${process.env.REACT_APP_URL_BACKEND}/tasks/update/${id}`,
    body
  );

  return res.data.data;
}