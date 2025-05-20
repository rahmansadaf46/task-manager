Simple Task Manager
A lightweight, client-side task management application built with React and Vite. This project allows users to add, complete, delete, and filter tasks, with persistence using localStorage. The application is designed with modern React practices, functional components, hooks, and clean CSS styling without external frameworks.
Features

Add Tasks: Create new tasks with a title and unique ID.
Mark as Completed: Toggle task completion status with a checkbox.
Delete Tasks: Remove tasks from the list.
Filter Tasks: View all, completed, or pending tasks.
Local Storage: Persists tasks across page reloads using localStorage.
Responsive Design: Clean, user-friendly interface optimized for various screen sizes.
Production-Ready: Modular components, efficient state management, and accessible UI.

Tech Stack

React: Frontend library using functional components and hooks.
Vite: Build tool for fast development and optimized production builds.
JavaScript: Core logic with crypto.randomUUID for unique task IDs.
CSS: Custom styles without external frameworks.
LocalStorage: Client-side storage for task persistence.

Project Structure
task-manager/
├── src/
│   ├── components/
│   │   ├── TaskInput.jsx
│   │   ├── TaskList.jsx
│   │   ├── TaskItem.jsx
│   ├── utils/
│   │   ├── mainUtil.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles.css
├── index.html
├── package.json
├── vite.config.js
├── README.md

Setup Instructions
Prerequisites

Node.js (version 16 or higher)
npm (version 8 or higher)

Installation

Clone the Repository:
git clone https://github.com/<your-username>/task-manager.git
cd task-manager


Install Dependencies:
npm install


Run the Development Server:
npm run dev

Open http://localhost:5173 in your browser to view the application.

Build for Production:
npm run build

This generates optimized files in the dist/ folder.

Preview Production Build:
npm run preview



Usage

Add a Task: Enter a task title in the input field and click "Add Task".
Complete a Task: Check the checkbox next to a task to mark it as completed.
Delete a Task: Click the "Delete" button next to a task to remove it.
Filter Tasks: Use the "All", "Completed", or "Pending" buttons to filter the task list.
Tasks are automatically saved to localStorage and persist across page reloads.

Code Highlights

Modular Components: TaskInput, TaskList, and TaskItem for separation of concerns.
State Management: Uses React hooks (useState, useEffect) for efficient state handling.
Utility Functions: setTasksToLocalStorage in utils/mainUtil.js for reusable localStorage logic.
CSS Styling: Consolidated in styles.css with component-specific class names.
Accessibility: Semantic HTML and ARIA-compatible checkboxes.

Contributing
Contributions are welcome! Please follow these steps:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m 'Add your feature').
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Built with Vite and React.
Inspired by modern task management applications.

