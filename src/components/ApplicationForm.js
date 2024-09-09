// ApplicationForm.js

import React from 'react';

const ApplicationForm = ({ formData, handleChange, handleSubmit, isEditing }) => {
  return (
    <div className="form-container">
      <h2>{isEditing ? 'Edit Application' : 'Create Application'}</h2>
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="income">Income</label>
          <input
            type="number"
            id="income"
            name="income"
            placeholder="Income"
            value={formData.income}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expenses">Expenses</label>
          <input
            type="number"
            id="expenses"
            name="expenses"
            placeholder="Expenses"
            value={formData.expenses}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="assets">Assets</label>
          <input
            type="number"
            id="assets"
            name="assets"
            placeholder="Assets"
            value={formData.assets}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="liabilities">Liabilities</label>
          <input
            type="number"
            id="liabilities"
            name="liabilities"
            placeholder="Liabilities"
            value={formData.liabilities}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          {isEditing ? 'Update Application' : 'Create Application'}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
