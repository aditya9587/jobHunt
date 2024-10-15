import axios from "axios";

export const createjob = (data) => {
  try {
    const token = localStorage.getItem("token");
    const res = axios.post(
      `${import.meta.env.VITE_BASE_URL}/job/create`,
      data,
      {
        headers: {
          Authorization: ` ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    // console.log(res);
    return res;
  } catch (error) {
    console.log("this is api error");
  }
};

export const displayJob = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASE_URL}/job/allJob`);
    // console.log(res);
    // console.log(res.data)
    return res;
  } catch (error) {
    console.log("axios error");
  }
};
