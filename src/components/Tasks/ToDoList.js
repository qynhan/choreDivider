/*
import React from 'react';

const TodoList = ({ toDoList, handleToggle, handleFilter }) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter} />
                )
            })}
            <button style={{ margin: '20px' }} onClick={handleFilter}>Clear Completed</button>
        </div>
    );
};

export default TodoList;
*/

import { useState, useEffect } from 'react';
import firebase from "../../firebase";
import 'firebase/database';

import Todo from "./ToDo";


export default function TodoList() {
    const [ todoList, setTodoList ] = useState();
    useEffect(()=>{
        const todoRef = firebase.database().ref("Todo");
        todoRef.on("value",(snapshot)=>{
            const todos = snapshot.val();
            const todoList = [];
            for (let id in todos){
                todoList.push({ id, ...todos[id] });
            }
            setTodoList(todoList);
            console.log("todoList->",todoList);
        })
    },[]);

    return (
        <div>
            {todoList ? todoList.map((todo, index) => <Todo todo={todo} key={index} />) : ""}
        </div>
    );
}