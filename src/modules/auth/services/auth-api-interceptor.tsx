import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

// Obtain the token from local storage
const getToken = () => localStorage.getItem("token");

// Create an axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor to add the token to the request headers
api.interceptors.request.use(
    (config) => {
        const token = getToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// Interceptor to handle unauthorized requests
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // If unauthorized, redirect to login
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default api;
