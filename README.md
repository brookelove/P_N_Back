# PINS & NEEDLES BACKEND

## Description

The backend for the PINS & Needles application provides a robust and scalable infrastructure for managing tattoo artists' expenses and productivity. Built with Node.js and Express.js, and powered by MongoDB, this backend handles user authentication, data storage, and API endpoints for creating, reading, updating, and deleting records. It ensures efficient data handling and secure access to artist portfolios, expense tracking, and productivity metrics.

# Table Of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Database](#database)
- [Project Structure](#project-structure)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact Information](#contact-information)
- [Acknowledgements](#acknowledgements)

## Overview

This application is the backend application for PINS & NEEDLES. This application will be built with MongoDB using basic CRUD oprtations to create a well centered secure hub for artists wanting to store their art.

## Installation

### Prerequisites

- Node.js (v X.X.X)
- MongoDB (v X.X.X)

### Setup

1. Clone the repo
```git clone https://github.com/your-repo/your-project.git```
2. Go to the location of where Pins & Needles are stored
```cd your-project```
3. Install dependancies
```npm install```

### Configuration

Set up environment variables in a .env file and add in the following variables:
```PORT=3000```
```MONGO_URI=mongodb://localhost:27017/pinsandneedles```
```JWT_SECRET=your_jwt_secret```

## Usage

### Running the Application

Start the application
```npm start```
The server will be running at <b>http://localhost:3000</b>

### API Endpoints

USERS/CLIENTS

- `GET /api/users` - Retrieves all users
- `GET /api/users/:id` - Retrieves one user with specific id
- `POST /api/users` - Creates new user
- `PUT /api/users/:id` - Updates user with specific id
- `DELETE /api/users/:id` - Delete user with specific id

ARTISTS

- `GET /api/artists` - Retrieves a list of artists.
- `GET /api/artists/:id` - Retrieves a specific artist by ID.
- `POST /api/artists` - Creates a new artist.
- `PUT /api/artists/:id` - Updates a specific artist by ID.
- `DELETE /api/artists/:id` - Deletes a specific artist by ID.

## Database

### Setup

Start MongoDB

```mongod --dbpath /path/to/your/database```

### Configuration
Ensure the MONGO_URI environment variable is set correctly in the .env file.

### Project Structure

    /config 
        connection.js
    /controllers
    /models
    /routes
        /api
    /utils
    server.js

## Testing

Testing for this application was used with Insomnia and Jest.

### Running Tests

To run the tests

```npm test```

### Testing Frameworks

- Jest: For unit and integration tests.

- Insomnia: For manual API endpoint testing.

## Deployment

## License

[MIT Liscense](have to create a link)

## Contact Information

- EmailL: brookelovedevelops@gmail.com