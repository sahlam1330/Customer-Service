import React from "react";
import build1 from "./build1.jpg"
import build2 from "./build2.jpg"

function Build_Your_Own() {
    
        return (

        <div className="build_info">
            <h1 id="3">Welcome to the build your own board page </h1>

            <p> It's never been easier to build your own custom skateboard! Our complete skateboard builder helps create your ideal setup while saving you an extra $10. 
                Our builder is easy to use, offering only compatible parts for the skateboard deck you choose. Once you customize your skateboard, you'll see exclusive savings of $10! 
                Assembled or unassembled, you'll still save!
            </p>

            <div className="buildimage">
            <button className="buildbtn1"><img className="img3" alt="build1" src={build1} width={200} height={240} /></button>
            
            <button className="buildbtn2"><img className="img3" alt="build2" src={build2} width={200} height={240}/></button>
            </div>
        
        </div>

        );
    }

export default Build_Your_Own;