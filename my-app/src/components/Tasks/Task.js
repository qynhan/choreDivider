import React, { useState } from 'react';
//mock data
import data from "../data.json";
//import data from '../../firebase'
//components
import Header from "../../header";
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

function Task() {

    // calendar
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };


    const [toDoList, setToDoList] = useState(data);

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task };
        });
        setToDoList(mapped);
    }

    const handleFilter = () => {
        let filtered = toDoList.filter(task => {
            return !task.complete;
        });
        setToDoList(filtered);
    }

    const addTask = (userInput) => {
        let copy = [...toDoList];
        copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
        setToDoList(copy);
    }

    return (
        <div className="container">
            <div className="app-wrapper">
                <Header />

                <Calendar onChange={onChange} value={date} />
                {date.toString()}

                <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} />
                <ToDoForm addTask={addTask} />
            </div>
        </div>
    );
}

export default Task;