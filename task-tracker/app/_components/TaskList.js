import React from 'react'
import styles from '../styles/tasklist.module.css'
import Task from './Task'

const TaskList = ({ tasks, onToggle, onDelete, onEdit}) => {
    
    return (
      <div className={styles.taskList}>
        {tasks.map(task => (
          <Task
            key={task.id}
            task={task}
            onToggle={onToggle}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
      </div>
    );
  };
  
  export default TaskList;