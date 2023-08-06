import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/login", { email, password });
      const { user, token } = response.data;

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user, token });

      localStorage.setItem("@visualstudies:user", user);
      localStorage.setItem("@visualstudies:token", token);
    } catch (error) {
      if (error.response) {
       console.error(error.response.data.message);
      } else {
        console.error("Erro ao fazer login");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@visualstudies:token");
    localStorage.removeItem("@visualstudies:user");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@visualstudies:token");
    const user = localStorage.getItem("@visualstudies:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        user: data.user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth, AuthContext };