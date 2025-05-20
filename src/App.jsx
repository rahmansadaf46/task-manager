import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { setTasksToLocalStorage } from './utils/mainUtil';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    if(tasks.length !== 0) {
      setTasksToLocalStorage(tasks);
    }
  }, [tasks]);

  const addTask = (title) => {
    const newTask = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setTasksToLocalStorage(updatedTasks);
  };

  const toggleTask = (id) => {
    const updatedTasks= tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    )
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    setTasksToLocalStorage(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskInput onAddTask={addTask} />
      <div className="filter-buttons">
        <button
          className={filter === 'all' ? 'filter-button active' : 'filter-button'}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={filter === 'completed' ? 'filter-button active' : 'filter-button'}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button
          className={filter === 'pending' ? 'filter-button active' : 'filter-button'}
          onClick={() => setFilter('pending')}
        >
          Pending
        </button>
      </div>
      <TaskList tasks={filteredTasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;