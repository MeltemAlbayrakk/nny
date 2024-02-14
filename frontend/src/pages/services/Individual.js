import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3001/",
  });
  
  instance.interceptors.request.use((config) => {
    const auth = localStorage.getItem("auth");
    if (!auth) return config;
    const parsed = JSON.parse(auth);
    config.headers["x-access-token"] = parsed?.token;
    return config;
  });
  
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      if (401 === error.response && error.response) {
        
        localStorage.clear();
        //window.location.href = "/";
      } else {
        return Promise.reject(error);
      }
    }
  );


  export default{

    v1:{
        Individual:{
            async FoodDetails(){

            }
        }

    }
  }