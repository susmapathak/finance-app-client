import React, { useState } from 'react';
import axios from 'axios';

const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    income: '',
    expenses: '',
    assets: '',
    liabilities: ''
  });

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/applications', formData);
      alert('Application submitted');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="firstName" value={formData.firstName} onChange={onChange} placeholder="First Name" required />
      <input type="text" name="lastName" value={formData.lastName} onChange={onChange} placeholder="Last Name" required />
      <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Email" required />
      <input type="text" name="phone" value={formData.phone} onChange={onChange} placeholder="Phone" required />
      <input type="number" name="income" value={formData.income} onChange={onChange} placeholder="Income" required />
      <input type="number" name="expenses" value={formData.expenses} onChange={onChange} placeholder="Expenses" required />
      <input type="number" name="assets" value={formData.assets} onChange={onChange} placeholder="Assets" required />
      <input type="number" name="liabilities" value={formData.liabilities} onChange={onChange} placeholder="Liabilities" required />
      <button type="submit">Submit Application</button>
    </form>
  );
};

export default ApplicationForm;
