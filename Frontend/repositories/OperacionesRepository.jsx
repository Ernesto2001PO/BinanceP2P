import axiosInstance from "../api/axiosInstance";



const OperacionesRepository = {
  crearAnuncioVenta: async (anuncioData) => {
    try {
      const response = await axiosInstance.post("/operaciones/anuncio-venta", anuncioData);
      return response.data;
    } catch (error) {
      console.error("Error creating sale ad:", error);
      throw error;
    }
  },
  crearAnuncio : async (anuncioData) => {
    try {
      const response = await axiosInstance.post("/operaciones/anuncio", anuncioData);
      return response.data;
    } catch (error) {
      console.error("Error creating ad:", error);
      throw error;
    }
  },

  traerTodosLosAnuncios: async () => {
    try {
      const response = await axiosInstance.get("/operaciones/anuncios-venta");
      return response.data;
    } catch (error) {
      console.error("Error fetching all sale ads:", error);
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
  }

};
export default OperacionesRepository;