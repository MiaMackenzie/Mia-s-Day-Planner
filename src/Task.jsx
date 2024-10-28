import React from 'react';

const Task = ({ task, toggleTaskCompletion, deleteTask }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
        disabled={task.completed} // Disable the checkbox if task is completed
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;