///*
const ToDo = ({ todo, handleToggle }) => {
    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo strike" : "todo"}>
            {todo.task}
        </div>
    );
};
 
export default ToDo;
//*/

/*
import React, { useState } from "react";
import firebase from "../../firebase";

export default function Todo({ todo }) {
    const [newTitle, setNewTitle] = useState("");

    const deleteTodo = () => {
        const todoRef = firebase.database().ref("Todo").child(todo.id);
        todoRef.remove();
    };

    const completeTodo = () => {
        const todoRef=firebase.database().ref("Todo").child(todo.id);
        todoRef.update({
            complete: !todo.complete,
        });
    };

    const editTodo = () => {
        const todoRef=firebase.database().ref("Todo").child(todo.id);
        todoRef.update({
            title: newTitle,
        });
    };
    

    const handleChange = (e) => {
        if(todo.complete === true){
            setNewTitle(todo.title);
        } else {
            todo.title="";
            setNewTitle(e.target.value);
        }
    };

    
    
    return (
    <li className={todo.complete ? "complete": "list-item"}> 
        <input 
            type = "text"
            value={todo.title === "" ? newTitle : todo.title}
            className="list"
            onChange={handleChange}
        />

        <div>
            <button 
                className="button-complete task-button"
                onClick={completeTodo}
            >
                <i className="fa fa-check-circle"></i>
            </button>

            <button className="button-edit task-button" onClick={editTodo}>
                <i className="fa fa-edit" />

            </button>

            <button className="button-delete task-button" onClick={deleteTodo}>
                <i className="fa fa-trash"/>
            </button>
        </div>
    </li>
    );
}
*/