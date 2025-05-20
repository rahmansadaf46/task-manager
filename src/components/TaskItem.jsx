function TaskItem({ task, onToggle, onDelete }) {
    return (
      <li className={`task-item ${task.completed ? 'task-item-completed' : ''}`}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="task-item-checkbox"
        />
        <span className="task-item-title">{task.title}</span>
        <button onClick={() => onDelete(task.id)} className="task-item-delete">Delete</button>
      </li>
    );
  }
  
  export default TaskItem;