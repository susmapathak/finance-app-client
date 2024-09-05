import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login } = useContext(AuthContext);

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(formData.email, formData.password);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" required />
      <input type="password" name="password" value={formData.password} onChange={onChange} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
