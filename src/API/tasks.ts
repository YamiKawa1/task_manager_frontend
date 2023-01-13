import axios from 'axios';
import { TaskCreate } from '../interface';

export const getTasks = async () => {
  const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/tasks`);
  return res.data.data;
};

export const postCreateTask = async (body: TaskCreate) => {
  const res = await axios.post(
    `${process.env.REACT_APP_URL_BACKEND}/tasks`,
    body
  );
  return res.data.data;
};
