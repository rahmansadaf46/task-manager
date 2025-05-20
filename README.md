# Simple Task Manager

A lightweight, client-side task management application built with **React** and **Vite**. This project allows users to add, complete, delete, and filter tasks, with persistence using `localStorage`. The application is designed with modern React practices — functional components, hooks, and clean CSS styling without external frameworks.

---

## ✨ Features

- **Add Tasks**: Create new tasks with a title and unique ID.
- **Mark as Completed**: Toggle task completion status with a checkbox.
- **Delete Tasks**: Remove tasks from the list.
- **Filter Tasks**: View all, completed, or pending tasks.
- **Local Storage**: Tasks persist across page reloads using `localStorage`.
- **Responsive Design**: Clean, user-friendly interface optimized for all screen sizes.
- **Production-Ready**: Modular components, efficient state management, and accessible UI.

---

## 🛠 Tech Stack

- **React**: Frontend library using functional components and hooks.
- **Vite**: Build tool for fast development and optimized production builds.
- **JavaScript**: Core logic with `crypto.randomUUID` for unique task IDs.
- **CSS**: Custom styles in a single file (`styles.css`).
- **LocalStorage**: Client-side task persistence.

---

## 📁 Project Structure

```
task-manager/
├── src/
│ ├── components/
│ │ ├── TaskInput.jsx
│ │ ├── TaskList.jsx
│ │ ├── TaskItem.jsx
│ ├── utils/
│ │ ├── mainUtil.js
│ ├── App.jsx
│ ├── main.jsx
│ ├── styles.css
├── index.html
├── package.json
├── vite.config.js
├── README.md
```

## 🚀 Setup Instructions

### ✅ Prerequisites

- **Node.js** (version 16 or higher)
- **npm** (version 8 or higher)

### 🔧 Installation

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/<your-username>/task-manager.git
    cd task-manager
    ```

2. **Install Dependencies**:
    ```bash
    npm install
    ```

3. **Run the Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) to view the application.

4. **Build for Production**:
    ```bash
    npm run build
    ```

    Optimized files will be generated in the `dist/` folder.

5. **Preview Production Build**:
    ```bash
    npm run preview
    ```

---

## 🧠 Usage

- **Add a Task**: Enter a title and click "Add Task".
- **Complete a Task**: Use the checkbox to mark it as completed.
- **Delete a Task**: Click "Delete" to remove it.
- **Filter Tasks**: Use "All", "Completed", or "Pending" buttons.
- All tasks are stored in `localStorage` and persist on reload.

---

## 💡 Code Highlights

- **Modular Components**: `TaskInput`, `TaskList`, and `TaskItem` for clean separation of logic.
- **State Management**: `useState`, `useEffect` hooks for efficient reactivity.
- **Utility Functions**: `setTasksToLocalStorage()` in `utils/mainUtil.js` for managing storage.
- **CSS Styling**: All styles in `styles.css`, using scoped class names.
- **Accessibility**: Uses semantic HTML and ARIA-compatible elements.

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add your feature'
    ```
4. Push to your branch:
    ```bash
    git push origin feature/your-feature
    ```
5. **Open a Pull Request**.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## 🙌 Acknowledgments

- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)
- Inspired by modern task management applications
