import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
    baseURL: "http://localhost:5555",
});

API.interceptors.request.use((req) => {
  const token = Cookies.get("Auth_token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

const createUser = async (data) => {
    try {
        const response = await API.post("/regUser", data,
        {
            withCredentials: true,
        }
    );
    return response.data;
    } catch (error) {
        console.log(error)
    }  
}

const loginUser = async ({email, password}) =>{
    try {
    const response = await API.get(
      `/loginUser?email=${email}&password=${password}`
    );
    if (response.data) {
    // console.log(response.data)
    }
    return response.data;
  } catch (error) {
    return error;
  }
}

const logOutUser = async () =>{
    const response = await API.post("/logout", {},
        {
            withCredentials: true,
        }
    );
    return response.data;
}

const logOut = async () =>{
    Cookies.remove('Auth_token');
}

const checkAuth = async () =>{
    const response = await API.get("/check-auth",
            {
                withCredentials: true,
                headers: {
                    "Cache-Control":
                        "no-store, no-cache, must-revalidate, proxy-revalidate",
                },
            }
        );
        return response.data;
}

const getUser = async () =>{
    const response = await API.get("/profile", {},
        {
            withCredentials: true,
        }
    );
    return response.data;
}

const changePassword = async ({ prevPassword, newPassword }) => {
  try {
    const response = await API.patch("/changePass", {
      oldPass: prevPassword,
      newPass: newPassword
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    }
    return { message: error.message || "Unknown error" };
  }
};

// const response = await API.get(
//       `/loginUser?email=${email}&password=${password}`
//     );


const useService = {
    createUser,
    loginUser,
    logOutUser,
    checkAuth,
    getUser,
    logOut,
    changePassword
};

export default useService;