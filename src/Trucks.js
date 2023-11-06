import React from "react";
import truck1 from "./truck1.jpg";

function Trucks() {

        return (

        <div className="trucks_info">
            <h1>Welcome to the Trucks page </h1>

            <p> Here you can select which truck you want on your board</p>

            <h1 className="featured">Featured Trucks</h1>
            <img className="img2" alt="truck1" src={truck1} width={200} height={240}/>
            <h3>26.95 - 27.95</h3>
        </div>

        );
    }

export default Trucks;