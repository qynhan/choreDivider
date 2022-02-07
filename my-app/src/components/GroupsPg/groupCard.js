import React from "react";
import img1 from "../../image/family.jpg";
import img2 from "../../image/roommates.jpg";
import "./Card.css";


const Card = props =>{
    return(
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image 1" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.groupName}</h4>
                <p className="card-text text-secondary">
                    {props.notes}
                </p>
                <a href="#" className="btn btn-outline-success">Go Anywhere</a>
            </div>
        </div>
        
        
    );
};

export default Card;