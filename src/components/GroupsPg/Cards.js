import React, { Component } from 'react';
import Card from "./groupCard";
import img1 from "../../image/family.jpg";
import img2 from "../../image/roommates.jpg";
import HeaderBar from "../../headerBar";

class Cards extends Component {
    render(){
        return (
            <div>
                <HeaderBar/>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row">
                        <div className="col-md-4">
                            <Card imgsrc={img1} groupName="Family" notes="1 task to do today"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img2} groupName="Roommates" notes="All tasks completed today"/>
                        </div>
                        <div className="col-md-4">
                            <Card imgsrc={img2} groupName="Roommates" notes="All tasks completed today"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;