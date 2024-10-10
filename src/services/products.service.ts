import axios from "axios";
import axiosIntance from "../lib/axios.config";

// Simulación de una API que devuelve productos con paginación
export const fetchProducts = async (page: number) => {
  try {
    const response = await axios.get(`https://api.escuelajs.co/api/v1/products`, {
      params: {
        offset: page,
        limit: 10,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error al cargar productos:", error);
    throw error;
  }
};
