import axiosInstance from "../api/axiosInstance";


const BilleteraRepository = {
  crearBilletera: async (billeteraData) => {
    try {
      const response = await axiosInstance.post("/billetera/crear", billeteraData);
      return response.data;
    } catch (error) {
      console.error("Error creating wallet:", error);
      throw error;
    }
  },


  obtenerBilleteraPorUsuarioId: async (id_usuario) => {
    try {
      const response = await axiosInstance.get(`/billetera/usuario/${id_usuario }`);
      return response.data;
    } catch (error) {
      console.error("Error fetching wallet by user ID:", error);
      throw error;
    }
  },
  
obtenerBilleteraPorMonedaId: async (id_moneda) => {
    try {
      const response = await axiosInstance.get(`/billetera/moneda/${id_moneda}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching wallet by currency ID:", error);
      throw error;
    }
    },
obtenerBilleteraPorId: async (id_billetera) => {
    try {
      const response = await axiosInstance.get(`/billetera/${id_billetera}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching wallet by ID:", error);
      throw error;
    }
    },
  deleteBilletera: async (id_billetera) => {
    try {
      const response = await axiosInstance.delete(`/billetera/${id_billetera}`);
      return response.data;
    } catch (error) {
      console.error("Error deleting wallet:", error);
      throw error;
    }
  },

};

export default BilleteraRepository;