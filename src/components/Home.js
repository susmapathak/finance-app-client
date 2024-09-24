import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './styles.css'; // Basic styling
import Navbar from './Navbar';

const Home = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="home-container">
          <div className="home-content">
            <h1>Welcome to the Asset Finance Platform</h1>
            <p>Manage your asset finance applications seamlessly. Site by Susma Pathak</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
