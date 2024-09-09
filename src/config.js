// Common configuration for server URL
const config = {
  serverUrl: process.env.REACT_APP_SERVER_URL || 'http://localhost:5000/api', // fallback to localhost
};

export default config;
