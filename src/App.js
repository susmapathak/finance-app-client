import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Register from './components/Register';
import Login from './components/Login';
import ApplicationList from './components/ApplicationList';
import ApplicationForm from './components/ApplicationForm';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/applications" element={<ApplicationList />} />
          <Route path="/application/new" element={<ApplicationForm />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
