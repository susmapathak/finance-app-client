# Asset Finance Management Platform - Frontend

This is a React application that connects to an Express.js server for managing user authentication and finance applications. Users can sign up, log in, and perform CRUD operations on their finance applications.

## Features

- User Registration and Login
- Create, Read, Update, and Delete (CRUD) finance applications
- Integration with backend Express.js server

## Prerequisites

Ensure that you have the following installed on your local machine:

- Node.js (v14 or later)
- npm or Yarn (for managing dependencies)
- Access to the Express.js server (see the server setup instructions below)

## Getting Started

1. **Clone the repository:**

   Run the following commands in your terminal:

   `git clone <your-repository-url>`

   `cd <repository-directory>`

2. **Install dependencies:**

   Run:

   `npm install`

   or if you are using Yarn:

   `yarn install`

3. **Environment Setup:**

   Create a `.env` file in the root of the project directory and add the following environment variable:

   REACT_APP_SERVER_URL=http://localhost:5000/api

   - `REACT_APP_SERVER_URL`: The base URL for the backend API server (update this if your server URL is different).

4. **Start the development server:**

   Run the following command to start the React development server:

   `npm start`

   or if you are using Yarn:

   `yarn start`

   The application will be available at http://localhost:3000.

## Usage

### Authentication

- **Sign Up**: Users can create a new account by providing their name, email, and password.
- **Log In**: Users can log in with their email and password. A JWT token is stored in local storage for authenticated requests.

### Applications

- **Create**: Users can create a new finance application by providing details such as income, expenses, assets, and liabilities.
- **Read**: Users can view their existing finance applications.
- **Update**: Users can modify details of their existing finance applications.
- **Delete**: Users can remove their finance applications.

## API Endpoints

The React application connects to the following API endpoints provided by the backend server:

- **Authentication Endpoints**:
  - `POST /api/auth/register` - Register a new user
  - `POST /api/auth/login` - Log in an existing user and receive a JWT token

- **Application Endpoints** (Protected):
  - `POST /api/applications` - Create a new application
  - `GET /api/applications` - Retrieve all applications for the logged-in user
  - `PUT /api/applications/:id` - Update an existing application
  - `DELETE /api/applications/:id` - Delete an application

## Troubleshooting

- **Server Connection Issues**: Ensure that the backend server is running and accessible at the URL specified in `REACT_APP_SERVER_URL`.
- **JWT Token Issues**: Make sure to handle JWT tokens correctly in your application to maintain authentication.


