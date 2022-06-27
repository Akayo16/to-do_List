import React, {useEffect, useState} from 'react';
import './Style/css/mainStyle.css';

import FormInput from './components/FormInput.jsx';
import TasksList from './components/TasksList.jsx';


const App = () => {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {

        localStorage.tasks ? setTasks([...JSON.parse(localStorage.getItem('tasks'))]) : localStorage.setItem('tasks', []);

    }, [])

    const createNewTask = (newTask) => {

        if(newTask.title === '' && newTask.body === '') return alert('Название пустое');

        const newTasksList = [...tasks, {...newTask, id: tasks.length + 1}];

        localStorage.setItem('tasks', JSON.stringify(newTasksList));

        setTasks([...newTasksList]);

    }

    const deleteTask = (task) => {

        let oldTasksList = [...tasks];

        let newTasksList = oldTasksList.filter(note => note.id !== task.id);

        newTasksList = newTasksList.map((task, index) => {
            return {...task, id: index + 1};
        })

        const tasksList = [...newTasksList];

        localStorage.setItem('tasks', JSON.stringify(tasksList));

        setTasks(newTasksList);

    }

    const taskCompleted = (task) => {

        let tasksList = [...tasks];

        let newTasksList = tasksList.map((item, index) => {
            
            if(item.id === task.id) {

                item.completed = true;
                return item;
                
            } 
            
            return item

        })

        const notCompletedTasksList = [...newTasksList].filter(item => item.completed === false);
        const completedTasksList = [...newTasksList].filter(item => item.completed === true);

        const finalTasksList = [...notCompletedTasksList, ...completedTasksList];

        setTasks([...finalTasksList]);

        localStorage.setItem('tasks', JSON.stringify(finalTasksList));

    }


    return (

        <div className="App">



            <FormInput 
                setTasks = { setTasks }
                createNewTask = { createNewTask }
            />

            <TasksList 
                tasks = { tasks }
                deleteTask = { deleteTask }
                taskCompleted = { taskCompleted }
            />

        </div>

    );
}

export default App;
