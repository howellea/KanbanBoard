# Kanban Board with JWT Authentication

Secure and dynamic Kanban board application built with React, Express, PostgreSQL, and JWT authentication.

## 📝 Description

This full-stack project enables users to log in and manage tasks using a Kanban board interface.

- **Motivation**: Provide a real-world agile board experience with secure user access.
- **Reason**: Many task management apps lack built-in security; this project demonstrates full JWT integration.
- **Problem Solved**: Protects sensitive data using token-based authentication and enables task tracking in a team workflow.
- **What I Learned**: Gained hands-on experience in JWT authentication, protected routes, localStorage, and deployment using Render.

## 📑 Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Tests](#tests)
- [Credits](#credits)
- [Questions](#questions)

## 🚀 Installation

To set up the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/kanban-board-jwt.git
   ```

2. Navigate into the project:
   ```bash
   cd kanban-board-jwt
   ```

3. Install backend and frontend dependencies:
   ```bash
   cd server
   npm install
   cd ../client
   npm install
   ```

4. Create a `.env` file inside `server/`:
   ```env
   DB_USERNAME=your_db_user
   DB_PASSWORD=your_db_pass
   JWT_SECRET=your_secret_key
   ```

5. Run the development servers:
   - In `/server`: `npm run dev`
   - In `/client`: `npm run dev`

## 💡 Usage

1. Open the app in your browser at `http://localhost:5173`.
2. Log in using your credentials (or seed a user in the DB).
3. Manage tasks on your Kanban board by creating, editing, and moving cards.

## 📜 License

This project is licensed under the MIT license.

## 🧪 Tests

To manually test:

- Use the login form with valid and invalid credentials.
- Try accessing `/create` or `/edit` routes without logging in — you should be redirected.
- Check token expiration by logging in, waiting, then refreshing the app.

## 🙌 Credits

- GitHub username: howellea
- GitHub profile: [https://github.com/howellea](https://github.com/howellea)
- Repo: https://github.com/howellea/KanbanBoard

## ❓ Questions

For support or feedback, feel free to contact:

- GitHub: [howellea](https://github.com/howellea)
- Email: howelleddy@gmail.com
