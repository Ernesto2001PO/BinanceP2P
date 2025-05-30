import axiosInstance from "../api/axiosInstance";


const User = {
  registerUser: async (userData) => {
    try {
      const response = await axiosInstance.post("/usuario/crear_usuario", userData);
      return response.data;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
  },
  loginUser: async (credentials) => {
    try {
      const response = await axiosInstance.post("/usuario/login", credentials);
      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
  }

}

export default User;
