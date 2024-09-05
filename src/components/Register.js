import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const { register } = useContext(AuthContext);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    register(formData.name, formData.email, formData.password);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" value={formData.name} onChange={onChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={onChange} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
