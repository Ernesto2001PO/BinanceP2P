import axiosInstance from "../api/axiosInstance";

const MonedaRepository = {
    getAllMonedas: async () => {
        try {
            const response = await axiosInstance.get("/moneda/obtener");
            return response.data;
        } catch (error) {
            console.error("Error fetching monedas:", error);
            throw error;
        }
    },
    getMonedaById: async (id) => {
        try {
            const response = await axiosInstance.get(`/moneda/obtener/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching moneda by ID:", error);
            throw error;
        }
    },
    createMoneda: async (monedaData) => {
        try {
            const response = await axiosInstance.post("/moneda/crear", monedaData, {

            });

            return response.data;
        } catch (error) {
            console.error("Error creating moneda:", error);
            throw error;
        }
    },
    updateMoneda: async (id, monedaData) => {
        try {
            const response = await axiosInstance.put(`/moneda/actualizar/${id}`, monedaData, {             
            });
            return response.data;
        } catch (error) {
            console.error("Error updating moneda:", error);
            throw error;
        }
    },

    deleteMoneda: async (id) => {
        try {
            const response = await axiosInstance.delete(`/moneda/eliminar/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting moneda:", error);
            throw error;
        }
    },



};

export default MonedaRepository;
