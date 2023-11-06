import React, { useState } from "react";
import RegistrationValidation from "./RegistrationValidation";
import './main_index.css';
import axios from "axios";
import { Link } from "react-router-dom";


export const Register = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: ''
    })

   

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(RegistrationValidation(values));
        if(errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/slaminskateshop', values)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    
    }

    
    return(
        <div>
            <div className="auth-form-container">
                <h1>Register</h1>
                <form action="" onSubmit={handleSubmit}>
                    <div className="register-form">
                        <label htmlFor="name">Full Name</label>
                        <input type="text"  placeholder="name" name="name" 
                        onChange={handleInput} className="form-control rounded-0"></input>
                        {errors.name && <span className="text-danger">{errors.name}</span>}
                    </div>
                    <div className="register-form2">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="your email" name="email"
                        onChange={handleInput} className="form-control rounded-0"></input>
                        {errors.email && <span className="text-danger">{errors.email}</span>}
                    </div>
                    <div className="register-form3">
                        <label htmlFor="password"> Password</label>
                        <input type="password" placeholder="*******" name="password"
                        onChange={handleInput} className="form-control rounded-0"></input>
                        {errors.password && <span className="text-danger">{errors.password}</span>}
                    </div>
                    <div className="btn_submit">
                        <button type="submit">Sign up</button>
                        <Link to="/login"><button>Already have an account? Login here.</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )

}


