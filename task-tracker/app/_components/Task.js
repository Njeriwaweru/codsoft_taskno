import React, { useState, useEffect} from 'react';
import styles from '../styles/task.module.css';

const Task = ({ task, onToggle, onDelete, onEdit }) => {
    const [showThumbsUp, setShowThumbsUp] = useState(false);

  useEffect(() => {
    if (task.completed) {
      setShowThumbsUp(true);
      const timer = setTimeout(() => setShowThumbsUp(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [task.completed]);

  return (
    <div className={`${styles.task} ${task.completed ? styles.completed : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <span onClick={() => onEdit(task.id)}>{task.text}</span>
      <button onClick={() => onDelete(task.id)}>Delete</button>
      {showThumbsUp && <span className={styles.thumbsUp}>👍</span>}
    </div>
  );
};

export default Task;
