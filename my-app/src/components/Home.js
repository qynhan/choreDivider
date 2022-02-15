import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import { useUserAuth } from "../contexts/UserAuthContext";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import carousel_img1 from "../image/carousel_img1.png";
import carousel_img2 from "../image/carousel_img2.png";
import carousel_img3 from "../image/carousel_img3.png";

import { makeStyles } from "@material-ui/core/styles";
import Wrapper from "./Header/Wrapper";
import CardWrapper from "./Cardwrapper/CardWrapper";
import { ReadMoreBtn } from "./Styledcomponents/StyledComponents";
import GroupsCard from "./GroupsPg/groupCard";

import ToDoList from "./Tasks/ToDoList";
import ToDoForm from "./Tasks/ToDoForm";
import data from "./data.json";
import HeaderBar from "../headerBar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "20px auto",
        // margin: "20px"
    },
    viewBtn: {
        position: "relative",
        top: "160px",
        margin: "20px auto",
    }
}));


const Home = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const { user, logOut } = useUserAuth();
    const [toDoList, setToDoList] = useState(data);
    // console.log(user);
    const handleLogOut = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err.message);
        }
    }

    const navigateToGroups = async () => {
        try {
            navigate("/YourGroups");
            // navigate("./groupsCard");
        } catch (err) {
            setError(err.message);
        }
    }

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
    const navigateToTasks = async () => {
        try {
            navigate("/YourTasks");
            // navigate("./groupsCard");
        } catch (err) {
            setError(err.message);
        }
    }
    const classes = useStyles();

    return (
        <>
            <HeaderBar />
            <div className="p-4 box my-3 text-center">
                Hello Welcome <br />
                {user && user.email}

                <div className={classes.root}>
                    <Wrapper />
                    <CardWrapper />

                    <div>

                        <ReadMoreBtn style={{ margin: "50px" }} className={classes.viewBtn}>Pick Your Pet</ReadMoreBtn>
                        <ReadMoreBtn style={{ margin: "50px" }} className={classes.viewBtn} onClick={navigateToGroups}>See Your Groups</ReadMoreBtn>
                        <ReadMoreBtn style={{ margin: "50px" }} className={classes.viewBtn} onClick={navigateToTasks}>See Your Tasks</ReadMoreBtn>

                        {/* <Link to="./GroupsPg/groupCard">See Your Groups</Link> */}
                    </div>

                    <div>
                        <Button variant="primary" onClick={handleLogOut}>Log out</Button>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Home;