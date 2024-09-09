import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import config from '../config';
import Navbar from './Navbar';
import ApplicationForm from './ApplicationForm';
import './styles.css';

const CreateApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    income: '',
    expenses: '',
    assets: '',
    liabilities: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${config.serverUrl}/applications`, formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error creating application', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <ApplicationForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEditing={false}
        />
      </div>
    </>
  );
};

export default CreateApplication;
