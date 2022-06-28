import React from 'react';

import MyButton from '../UI/MyButton/MyButton.jsx';
import cl from '../Style/css/TaskBlockStyle.module.css'

const TaskBlock = ({ task, deleteTask, taskCompleted, ...props }) => {



    return (

        <div 
            className = { cl.taskBlock }
        >

            <div 
                className = { task.completed ? cl.completedTask : cl.taskContent }
                onClick = {() => taskCompleted(task)} 
            >

                <h1 className = { cl.title } > {task.id}. {task.title} </h1> <br></br>

                <h1 className = { cl.content } >{task.body}</h1>

            </div>

            <MyButton
                onClick = { () => deleteTask(task) }
            >
                Delete
            </MyButton>
            
        </div>
    )
}

export default TaskBlock