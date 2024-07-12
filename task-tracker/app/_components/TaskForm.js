import React, { useState, useEffect } from 'react'
import styles from '../styles/taskform.module.css'

const TaskForm = ({ addTask, editingTask, updateTask }) => {
    const [text, setText] = useState('');
  
    useEffect(() => {
      if (editingTask) {
        setText(editingTask.text);
      } else {
        setText('');
      }
    }, [editingTask]);
  
    const handleSubmit = e => {
      e.preventDefault();
      if (editingTask) {
        updateTask(editingTask.id, text);
      } else {
        addTask(text);
      }
      setText('');
    };
  
    return (
      <form className={styles.taskForm} onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">{editingTask ? 'Update' : 'Add'} Task</button>
      </form>
    );
  };
  
  export default TaskForm;