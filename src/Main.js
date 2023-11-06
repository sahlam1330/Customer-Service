import React, { useState } from "react";
import {Route, Routes,
        NavLink, HashRouter, BrowserRouter,
    } from "react-router-dom";
import './main_index.css';
import skateboarder from './skateboarder.jpeg';
import CheckOut from "./CheckOut";
import Deck from "./Deck";
import Trucks from "./Trucks";
import Complete_Skateboard from "./Complete_Skateboard";
import Build_Your_Own from "./Build_Your_Own";
import WelcomePage from "./WelcomePage";
import {Login} from "./Login";
import { Register } from "./Register";




function Main() {

    const [value, setValue] = useState('');

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onSearch = (searchTerm) => {
        console.log('search', searchTerm);
    }


    return (
        <BrowserRouter>
                    
                    <div className="title">
                        <header>
                        <span className="phone_top">1800.Go.Skate</span>
                        <h1><img className="img" alt="skateboarder" src={skateboarder} width={70} height={70}/> Slamin Skate Shop 
                        <span className="banner_right"><button><NavLink to="/support">support</NavLink></button></span>
                        <span className="gift_card"><button><NavLink to="/gift_card">Gift card</NavLink></button></span>
                        <span className="profile"><button><NavLink to="/login">Log In</NavLink></button></span></h1>  
                        </header>
                    </div>  
                
                    <div className="shipping_info">
                        <span className="shipping">Free Ground Shipping over $50 </span> <span className="line1">|</span> <span className="two_day">$5 TWO DAY SHIPPING</span> 
                        <span className="over">on orders over $75, under 10lbs</span> <span className="line2">|</span><span className="sixtDay">Free 60 Day Returns </span> 
                        <span className="seeD">See Details</span >
                    </div>
                
                    <div className="search_bar" >
                        <span className="line3">|</span><NavLink to="/maillist"><span className="mailing_list"><button type="submit" id="submit">Join Our Mailing List</button></span></NavLink>
                        <span className="search_field"><input type="text" value={value} onChange={onChange} id="search"></input></span>
                        <button className="search_btn" onClick={() => onSearch(value) }>Search</button><span className="line4">|</span><span className="wish_list"> Wish Lists</span>
                        <span className="line5">|</span><NavLink to="/checkout"><span className="checkout">Check Out</span></NavLink>
                    </div>
            
                  
                <div>
                    <ul className="header">
                  <NavLink to="/welcomepage"><h1>SKATEBOARDS</h1>  </NavLink>        
                        <ul className="deck">
                            <NavLink to="/deck">Deck</NavLink> 
                        </ul>
                        <ul className="complete">
                            <NavLink to="/complete">Complete Skateboards</NavLink>
                        </ul>
                        <ul className="build">
                            <NavLink to="/build">Build Your Own</NavLink>
                        </ul>
                        <ul className="trucks">
                            <NavLink to="/trucks">Trucks</NavLink>
                        </ul>
                    </ul>
                </div>

                <Routes>
                    <Route path="/welcomepage" element={<WelcomePage/>} />
                    <Route path="/complete" element={<Complete_Skateboard/>} />
                    <Route path="/deck" element={<Deck/>} /> 
                    <Route path="/build" element={<Build_Your_Own/>} />
                    <Route path="/trucks" element={<Trucks/>} />       
                    <Route path="/checkout" element={<CheckOut/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/register" element={<Register/>} />
                    
                </Routes>
             
             
        </BrowserRouter>

    );
 }

export default Main;