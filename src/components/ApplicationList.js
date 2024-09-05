import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ApplicationList = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const fetchApplications = async () => {
      const res = await axios.get('http://localhost:5000/api/applications');
      setApplications(res.data);
    };

    fetchApplications();
  }, []);

  return (
    <ul>
      {applications.map((application) => (
        <li key={application._id}>{application.personalDetails.firstName} {application.personalDetails.lastName}</li>
      ))}
    </ul>
  );
};

export default ApplicationList;
