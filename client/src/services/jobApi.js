import axios from "axios";


export const createjob = (data) =>{
  try {
    const res = axios.post(`${import.meta.env.VITE_BASE_URL}/job/create`,data,
      {
        headers:{
          'Content-Type':"application/x-www-form-urlencoded"
        }
      })
      console.log(res)
      return res;
  } catch (error) {
    console.log(error)
  }
  
}

