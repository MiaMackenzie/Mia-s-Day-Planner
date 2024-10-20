import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import './App.css'; // Importing the CSS file

const App = () => {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const addTask = (task) => {
    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
  };

  // Toggle task completion status
  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Count completed tasks
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className="day-planner-container">
      <h1>Day Planner</h1>
      <TaskForm addTask={addTask} />
      <h2>{completedTasks} tasks completed</h2>
      <ul>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTaskCompletion={toggleTaskCompletion}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;