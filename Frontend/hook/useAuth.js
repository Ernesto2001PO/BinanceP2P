import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



export const useAuth = (shouldRedirect) => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("token"));
    console.log(isAuthenticated);

    useEffect(() => {
        if (shouldRedirect && !isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated]);

    const login = (token, user) => {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setIsAuthenticated(true);
    }
    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsAuthenticated(false);
        navigate("/login");
    }
    return {
        isAuthenticated,
        login,
        logout,
        
    }
}
