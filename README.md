# Zima Backend

This is the backend to [Zima application](https://github.com/apella1/zima).

## Setting Up A Local Environment

- Clone the repository to your local environment
- Switch to the project directory
- Run `npm install` to install the dependencies
- Run `npm run dev` to start the development server

## Feature Breakdown

### User CRUD and Auth Functionality

- Users can register by creating a new account using an email address.
- Any visitor can see a list of all registered users.
- Registered users can sign-in and sign-out.
- Only registered users can view individual user details after signing in.
- Only a registered and authenticated user can edit or remove their own user account details.

### User Model

- Name: required, unique, string
- Email: required, unique, string, one account per email
- Password: required, string, minimum 8 characters, only the hash is stored in the database
- CreatedAt: required, date, automatically generated timestamp
- UpdatedAt: required, date, automatically generated timestamp

### API Endpoints For User CRUD

- GET /api/users - Get all users
- GET /api/users/:id - Get a single user
- POST /api/users - Create a new user
- PUT /api/users/:id - Update a user
- DELETE /api/users/:id - Delete a user
- POST auth/login - Login a user
- GET auth/logout - Logout a user

## Technologies Used

### Languages and Frameworks

- TypeScript
- Node.js
- Express.js
- MongoDB
- Socket.io for chat functionality
- Discourse or vanilla forums for the community forums
- Node-cron for daily reminders

### Dependencies Used

- Validator.js - string validation and sanitization
- Body-parser
- Cookie-parser
- Helmet
- Cors
- Dotenv
- Mongoose
- Compress
