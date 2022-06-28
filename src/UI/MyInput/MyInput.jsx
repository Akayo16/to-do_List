import React from "react";
import cl from './MyInputStyle.module.css';

const MyInput = ({ onChange, type, placeholder, value, ...props }) => {

    return (

        <input
            type = { type }
            className = { cl.inp }
            value = { value }
            onChange = {(e) => { onChange(e) } }
            placeholder = { placeholder }
        />

    );
};

export default MyInput;
