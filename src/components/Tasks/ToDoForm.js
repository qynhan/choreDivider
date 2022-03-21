/*
import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Input a new task:" />
            <button>submit</button>
        </form>
    );
};

export default ToDoForm;
*/

import React, { useState } from "react";
import firebase from "../../firebase";

export default function ToDoForms() {
    const [title, setTitle] = useState("");

    const handleChange = (e) => {
        setTitle(e.target.value);
    };

    const createTodo = (event) => {
        event.preventDefault()
        const todoRef = firebase.database().ref("Todo");
        const todo = {
            title,
            completed: false,
        }
        todoRef.push(todo);
        setTitle("");
    };

    

    return (
        <form onSubmit={createTodo}>
            <input 
                type="text"
                placeholder="Enter a Todo..."
                className="task-input"
                value={title}
                required
                onChange={handleChange}
            />
            <button className="button-add" type="submit">
                Add
            </button>
        </form>
    )

}