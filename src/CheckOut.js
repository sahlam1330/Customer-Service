import { useState } from "react";

    const CheckOut = () => {

    

        const [name, setName] = useState('');
        const [address, setAddress] = useState('');
        const [city, setCity] = useState('');
        const [email, setEmail] = useState('');
        const [phone, setPhone] = useState('');

        const [type, setType] = useState('Please select type');


        const [option1, setOption1] = useState ('None');
        const [option2, setOption2] = useState ('None');
        const [option3, setOption3] = useState ('None');
        
        const [body, setBody] = useState ('');
        
      

        return (


            <article>
                <div className="checkout_info">
                <h1>Check Page</h1>
        
                <form action="novalidate">
                        <fieldset id="deliveryinfo">
                            <legend>Delivery Information </legend>
                            <label form="nameinput">Name</label>
                            <input type="text"  id="nameinput" required="required" value={name} onChange={(e) => setName(e.target.value)} />
                            <label form="addrinput">Street Address</label>
                            <input type="text" id="addrinput" name="address" required="required" value={address} onChange={(e) => setAddress(e.target.value) } />
                            <label form="cityinput">City/State/Zip</label>
                            <input type="text" id="cityinput" name="city" required="required" value={city} onChange={(e) => setCity(e.target.value) } />
                            <label form="emailinput">Email</label>
                            <input type="email" id="emailinput" name="email" required="required" value={email} onChange={(e) => setEmail(e.target.value) } />
                            <label form="phoneinput">Phone</label>
                            <input type="text" id="phoneinput" name="phone" required="required" value={phone} onChange={(e) => setPhone(e.target.value) } />
                        </fieldset>
        
                        <fieldset id="orderinfo">
                            <legend>Order Information</legend>
                                <fieldset id="modeltype"> 
                                   <select id="type" name="type" required="required" value={type} onChange={(e) => setType((e.target.value)) } >
                                   <option value="select">Please make a selection</option>
                                    <option value="Deck">Deck</option>
                                    <option value="Complete">Complete</option>
                                    <option value="Trucks">Trucks</option>
                                    <option value="Build">Build</option>
                                   </select>
                                </fieldset>
                                <fieldset id="selection">
                                    <legend>Deck Selection</legend>
                                    <select id="deck" name="option1" required="required" value={option1} onChange={(e) => setOption1((e.target.value)) } >
                                        <option value="None">None</option>
                                        <option value="BirdHouse Hale Graveyard Deck">BirdHouse Hale Graveyard Deck</option>
                                    </select>
                                </fieldset>
                                <fieldset id="selection">
                                    <legend>Complete Board Selection</legend>
                                    <select id="complete" name="option2" required="required" value={option2} onChange={(e) => setOption2(e.target.value) } >
                                        <option value="None" >None</option>
                                        <option value="Example">Example</option>
                                    </select>
                                </fieldset>
                                <fieldset id="selection">
                                    <legend>Truck Selection</legend>
                                    <select id="truck" name="option3" required="required" value={option3} onChange={(e) => setOption3(e.target.value) }>
                                        <option value="None" >None</option>
                                        <option value="Example" >Example</option>
                                    </select>
                                </fieldset>
                                <label for="instructions" id="instrlabel">Build You Own Board</label>
                                <textarea id="instruction" name="instructions" rows="3" cols="50" 
                                    placeholder="type out your specialization" value={body} onChange={(e) => setBody(e.target.value) }>  </textarea>                                
                                <div>
                                <button>Submit Order</button>
                                </div>

                      
                        </fieldset>
                </form>
                </div>
        <section className="orderreview">
            <div className="customersummary">
                    <h2>Customer Summary</h2>
                    <h3>Delivery to</h3>
                    <p>Name: {name}</p>
                    <p>Address: {address}</p>
                    <p>City/State/Zip: {city}</p>
                    <p>Email: {email}</p>
                    <p>Phone: {phone}</p>

                    <h2>Order Type</h2>
                    <p>{type}</p>
                    

                    <h2>Order Information</h2>
                    <p>Deck Selection: {option1}</p>
                    <p>Complete Board Selection: {option2}</p>
                    <p>Truck Selection: {option3}</p>

                </div>
                <div className="ordersummary">
                    <h3>Build Your Own Board </h3>
               
                    <p>Customization Information: {body}   </p>
                </div>  
         </section>
              
        </article>
    );
}
       

export default CheckOut;