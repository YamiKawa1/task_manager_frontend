import axios from "axios";


export const getTasks = async (URL:string) => {
    const res = await axios.get(URL);
    return res.data.data;
}