import React from 'react';
import cl from './MyButton.module.css'

const MyButton = ({onClick, children, ...props}) => {

    return (

        <button
            onClick = { (e) => onClick(e) } 
            className = { cl.btn }
        >
            { children }
        </button> 

    )
}

export default MyButton