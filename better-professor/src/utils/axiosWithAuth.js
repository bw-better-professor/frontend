import axios from "axios";

export const axiosWithAuth = () => {
  return axios.create({
    // config object
    baseURL: "https://betterprofessor25.herokuapp.com/",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};