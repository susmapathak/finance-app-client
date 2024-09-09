import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import config from '../config';
import ApplicationForm from './ApplicationForm';
import './styles.css';
import Navbar from './Navbar';

const EditApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    income: '',
    expenses: '',
    assets: '',
    liabilities: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${config.serverUrl}/applications/${id}`)
      .then((response) => setFormData(response.data))
      .catch((error) => console.error('Error fetching application', error));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${config.serverUrl}/applications/${id}`, formData);
      navigate('/dashboard');
    } catch (error) {
      console.error('Error updating application', error);
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
          isEditing={true}
        />
      </div>
    </>
  );
};

export default EditApplication;
