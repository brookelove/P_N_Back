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

## User Story

 > As a ARTIST, I want to be able to have a total hub where I can look at clients, send information, and save documents to store use. I want to also send information to CLIENTS through different items. I want to be able to communicate with other ARTISTS and be notified on news in the community.
 > As a CLIENT, I want to be able to search up artists within my area, look at their work, and

### Acceptance Criteria

<u><b>User Authentication</b></u>

- Registration
    GIVEN a user who is not registerd, WHEN they provide valid registration details (e.g., username, email,phone number, password), THEN  a new user account is created and they receive a confirmation email.
- Login
    GIVEN a registered user, WHEN they provide valid login credentials (username/phone/email and password), THEN they receive an authentication token for accessing protected routes.

<u><b>User Management</b></u>
- Get User Details
    GIVEN an authenticated user (Artist), WHEN they request their user details(Client), THEN the system returns the user's profile information.

- Update User Profile
    GIVEN an authenticated user, WHEN they provide updated profile information, THEN the system updates the user's profile and returns the updated information.

- Delete User Account
    GIVEN an authenticated user, WHEN they request to delete their account, THEN the system removes the user's data from the database.

<u><b>Artist Management</b></u>

- Add New Artist
    GIVEN a user with permissions to add artists, WHEN they provide valid artist details, THEN a new artist profile is created and stored in the database.

- Get Artist List

    GIVEN any user, WHEN they request the list of artists, THEN the system returns a list of all artist profiles.

- Update Artist Profile
    GIVEN a user with permissions to update artist profiles, WHEN they provide updated artist information, THEN the system updates the artist's profile and returns the updated information.

- Delete Artist Profile
    GIVEN a user with permissions to delete artists, WHEN they request to delete an artist profile, THEN the system removes the artist's data from the database.

<u?><b>Expense Tracking</b></u>

- Add Expense
    GIVEN an authenticated user, WHEN they provide valid expense details (e.g., amount, date, category), THEN the system records the expense and associates it with the user.

- Get Expenses
    GIVEN an authenticated user, WHEN they request their expense records, THEN the system returns a list of their recorded expenses.

- Update Expense
    GIVEN an authenticated user, WHEN they provide updated details for an existing expense, THEN the system updates the expense record and returns the updated information.

Delete Expense
    GIVEN an authenticated user, WHEN they request to delete an expense record, THEN the system removes the expense from the user's records.

<u><b>Productivity Metrics</b></u>

- Log Productivity
    GIVEN an authenticated user, WHEN they provide productivity details (e.g., hours worked, tasks completed) THEN the system logs the productivity data and associates it with the user.

- Get Productivity Data
    GIVEN an authenticated user, WHEN they request their productivity metrics, THEN the system returns a summary of their logged productivity data.

- Update Productivity Log
    GIVEN an authenticated user, WHEN they provide updated details for an existing productivity log, THEN the system updates the log and returns the updated information.

- Delete Productivity Log
    GIVEN an authenticated user, WHEN they request to delete a productivity log, THEN the system removes the log from the user's records.

<u><b>General</b></u>

- Invalid Endpoint
    GIVEN any user, WHEN they make a request to an invalid endpoint, THEN the system returns a 404 Not Found response.

- Unauthorized Access
    GIVEN an unauthenticated user, WHEN they try to access a protected route, THEN the system returns a 401 Unauthorized response.
### Bakground

```md
```

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