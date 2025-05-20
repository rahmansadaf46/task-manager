import TaskItem from './TaskItem';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <p className="task-list-empty">No tasks available</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
          />
        ))
      )}
    </ul>
  );
}

export default TaskList;