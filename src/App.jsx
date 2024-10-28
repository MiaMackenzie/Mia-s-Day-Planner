import React, { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All'); // Filter state

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

  // Filter tasks based on selection
  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Pending') return !task.completed;
    return true;
  });

  return (
    <div className="day-planner-container">
      <h1>Day Planner</h1>
      <TaskForm addTask={addTask} />

      {/* Filter selection */}
      <div className="filter-container">
        <button onClick={() => setFilter('All')}>All</button>
        <button onClick={() => setFilter('Completed')}>Completed</button>
        <button onClick={() => setFilter('Pending')}>Pending</button>
      </div>

      <h2>{completedTasks} tasks completed</h2>

      <ul>
        {filteredTasks.map((task) => (
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
