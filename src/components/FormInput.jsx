import React, { useState } from "react";

import MyInput from "../UI/MyInput/MyInput.jsx";
import MyButton from "../UI/MyButton/MyButton.jsx";

const FormInput = ({ createNewTask, setTasks, ...props }) => {

    const [task, setTask] = useState({ title: '', body: '', completed: false });

    const clickOnButton = (e) => {

        e.preventDefault();

        createNewTask({ ...task });

        setTask({ title: '', body: '', completed: false });

    }

    return (

        <div >

            <MyInput
                value = { task.title }
                onChange = {(e) => {setTask({...task, title: e.target.value})}}
                type = 'text'
                placeholder = 'Body your task'
            />

            <br></br>

            <MyInput 
                value = { task.body }
                onChange = { (e) => setTask({...task, body: e.target.value}) }
                type = 'text'
                placeholder = 'Title your task'
            />
            
            <br></br>

            <MyButton
                onClick={ clickOnButton }
            >
                Add task
            </MyButton>

        </div>

    )
};

export default FormInput;
