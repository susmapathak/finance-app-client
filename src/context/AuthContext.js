import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axios.get(`${config.serverUrl}/auth/me/`)
        .then((response) => {
          setUser(response.data);
        })
        .catch(() => {
          console.log("Error fetching user data");
          localStorage.removeItem('authToken');
          delete axios.defaults.headers.common['Authorization'];
        })
        .finally(() => {
          setLoading(false);  // Ensure loading is set to false after the async call completes
        });
    } else {
      setLoading(false);  // No token found, stop loading
    }
  }, []);

  const login = async (email, password) => {
    const response = await axios.post(`${config.serverUrl}/auth/login/`, { email, password });
    const { token } = response.data;
    localStorage.setItem('authToken', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    const userResponse = await axios.get(`${config.serverUrl}/auth/me/`);
    setUser(userResponse.data);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    delete axios.defaults.headers.common['Authorization'];
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
