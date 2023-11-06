import React from "react";
import deck1 from './deck1.JPG'

function Deck() {

    
     return(
        <div className="deck_info">
            <h1 id="1">Welcome to the Deck page </h1>

            <p> Slamin Skate Shop is proud to feature the biggest selection of skateboard decks online. 
                Featuring brands like Baker, Anti Hero, Girl, Polar, Santa Cruz, Powell, Enjoi, and more. 
                Helpful tip: The width of your skateboard deck should be close to the width of your trucks. An 8 inch deck should be paired with 8 inch trucks. 
                All decks have the option of free griptape. Check out our article on how to apply griptape to your skateboard below.
            </p>

            <h1 className="featured">Featured Decks</h1>
            <img className="img2" alt="deck1" src={deck1} width={200} height={240}/>
            <h3>8.75 x 32 <br/>$77.99</h3>

        </div>

    );

}

export default Deck;