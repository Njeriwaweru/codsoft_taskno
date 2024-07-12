"use client"
import React, { useState } from "react";
import styles from "./page.module.css";
import TaskForm from "./_components/TaskForm";
import TaskList from "./_components/TaskList";

export default function Home() {

  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = text => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = id => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = id => {
    const taskToEdit = tasks.find(task => task.id === id);
    setEditingTask(taskToEdit);
  };

  const updateTask = (id, text) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, text } : task
    ));
    setEditingTask(null);
  };


  return (
    <div className={styles.app}>
      <h1>Task Tracker</h1>
      <TaskForm addTask={addTask} editingTask={editingTask} updateTask={updateTask} />
      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} onEdit={editTask} />
    </div>
  );
}
