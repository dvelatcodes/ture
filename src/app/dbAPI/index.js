import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
    baseURL: "http://localhost:3000",
});

API.interceptors.request.use((req) => {
  const token = Cookies.get("Auth_token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

const createUser = async (data) => {
    const response = await API.post("/register", data,
        {
            withCredentials: true,
        }
    );
    return response.data;
}

const loginUser = async (data) =>{
    const response = await API.post("/login", data,
        {
            withCredentials: true,
        }
    );
    return response.data;
}

const logOutUser = async () =>{
    const response = await API.post("/logout", {},
        {
            withCredentials: true,
        }
    );
    return response.data;
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


const useService = {
    createUser,
    loginUser,
    logOutUser,
    checkAuth
};

export default useService;