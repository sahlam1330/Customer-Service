import React from "react";
import complete1 from './complete1.jpg';

function Complete_Skateboard() {
        return(

            <div className="complete_info">
                <h1 id="2">Welcome to the Complete skatboard page </h1>

                <p> Find the best selection of pre-built complete skateboards online. Choose from the most popular brands like Enjoi, Almost, Element, 
                    Santa Cruz, Carver, and more. Pre-built complete skateboards come fully assembled and are ready to roll right out of the box. 
                    Great for the beginning skateboarder. Check out our article on how to choose a pre-built skateboard below.
                </p>

                <h2 >Shop Pre-built Complete Skateboards by brand</h2>
                <img className="img2" alt="complete" src={complete1} width={200} height={240}/>
                <h3>7.75 x 3.1 <br/>$79.99</h3>
            </div>

        );

}

export default Complete_Skateboard;
