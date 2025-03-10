import axios from "axios";

// Obtener el token desde localStorage o cookies
const getToken = () => localStorage.getItem("token");

// Crear una instancia de Axios
const api = axios.create({
    baseURL: "http://localhost:8080", // Reemplázalo con tu API
    headers: {
        "Content-Type": "application/json",
    },
});

// Interceptor para agregar el token en cada solicitud
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

// Interceptor para manejar respuestas no autorizadas
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Si la respuesta es 401, redirigir al login
            window.location.href = "/login";
        }
        return Promise.reject(error);
    }
);

export default api;
