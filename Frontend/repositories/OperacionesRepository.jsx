import axiosInstance from "../api/axiosInstance";



const OperacionesRepository = {
  crearAnuncio: async (anuncioData) => {
    try {
      const response = await axiosInstance.post("/operaciones/anuncio", anuncioData);
      return response.data;
    } catch (error) {
      console.error("Error creating ad:", error);
      throw error;
    }
  },
  traerAnunciosVentaMenosElPropio: async (id_usuario) => {
    try {
      const response = await axiosInstance.get(`/operaciones/anuncios-venta/${id_usuario}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching sale ads excluding own:", error);
      throw error;
    }
  },
  traerAnunciosCompraMenosElPropio: async (id_usuario) => {
    try {
      const response = await axiosInstance.get(`/operaciones/anuncios-compra/${id_usuario}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching purchase ads excluding own:", error);
      throw error;
    }
  },
  hacerTransferencia: async (transferData) => {
    try {
      const response = await axiosInstance.post("/operaciones/transaccion", transferData);
      return response.data;
    } catch (error) {
      console.error("Error making transfer:", error);
      throw error;
    }
  },
  obtenerTransferenciasPorBilletera: async (id_billetera) => {
    try {
      const response = await axiosInstance.get(`/operaciones/transferencias/${id_billetera}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching transfers by wallet:", error);
      throw error;
    }
  }
};
export default OperacionesRepository;