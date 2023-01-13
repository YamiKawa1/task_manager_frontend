import axios from 'axios';

export const getTasks = async () => {
  const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/tasks`);
  return res.data.data;
};
