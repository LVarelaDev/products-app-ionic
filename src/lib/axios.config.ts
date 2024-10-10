import axios from "axios";

// Verifica que la URL base esté configurada
const baseURL = process.env.REACT_APP_BASE_URL_PLATZI ?? "https://api.escuelajs.co/api/v1/";

if (!baseURL) {
  throw new Error("REACT_APP_BASE_URL_PLATZI no está configurado");
}

export const axiosIntance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para manejar respuestas
axiosIntance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      console.error("Error response:", error.response);
      if (error.response.status === 401) {
        console.error("No autorizado");
      } else if (error.response.status === 500) {
        console.error("Error interno del servidor");
      }
    } else if (error.request) {
      console.error("No response received:", error.request);
    } else {
      console.error("Error in setting up request:", error.message);
    }

    return Promise.reject(new Error(error));
  }
);

export default axiosIntance;
