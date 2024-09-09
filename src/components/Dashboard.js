// Dashboard.js
import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import config from '../config';
import Navbar from './Navbar';
import './styles.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    axios.get(`${config.serverUrl}/applications`)
      .then((response) => setApplications(response.data))
      .catch((error) => console.error('Error fetching applications', error));
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${config.serverUrl}/applications/${id}`);
      setApplications(applications.filter((app) => app._id !== id));
    } catch (error) {
      console.error('Error deleting application', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container dashboard-container">
        <h2>Welcome, {user?.name}</h2>
        <h3>Your Applications:</h3>
        <Link to="/create-application" className="nav-button">Create New Application</Link>
        <br/>
        {applications.length > 0 ? (
          <ul className="application-list">
            {applications.map((app) => (
              <li key={app._id} className="application-item">
                <div>
                  <p><strong>Application Name:</strong> {app.name}</p>
                  <p><strong>Income:</strong> {app.income}</p>
                  <p><strong>Expense:</strong> {app.expenses}</p>
                  <p><strong>Assets:</strong> {app.assets}</p>
                  <p><strong>Liabilities:</strong> {app.liabilities}</p>
                </div>
                <div className="application-actions">
                  <Link to={`/edit-application/${app._id}`} className="nav-link">Edit</Link>
                  <button onClick={() => handleDelete(app._id)} className="nav-button">Delete</button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No applications found.</p>
        )}
      </div>
    </>
  );
};

export default Dashboard;
