import axios, { isAxiosError } from "axios";

export const registerUser = async (data) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/v1/user/register",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log(res)
    return res;
  } catch (error) {
    if(error.response){
      console.log(error.response)
      if(error.response.status === 400 ){
        return error;
      }
    }
  }
};

export const loginAuth = async (datavalue) => {
  try {
    const res = await axios.post(
      "http://localhost:3000/api/v1/user/login",
      datavalue,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res;
  } catch (error) {
    if(error.response){
      if(error.response.status === 400 ){
        return error;
      }
    }
}
}
