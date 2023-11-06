import React, { useState } from "react";
import './main_index.css';
import LoginValidation from "./LoginValidation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export const Login = () => {

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate();

    const [errors, setErrors] = useState({})
    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(LoginValidation(values));
        if(errors.email === "" && errors.password === "") {
            axios.post('http://localhost:8081/slaminskateshop', values)
            .then(res => {
                navigate('/main');
            })
            .catch(err => console.log(err));
        }
    
    
    }
    
    return(
        <div>
        <div className="auth-form-container">
            <h1>Sign In</h1>
          <form action="" onSubmit={handleSubmit}>
                <div className="login-form"> 
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder="your email" name="email" 
                    onChange={handleInput} className="form-control rounded-0" ></input>
                    {errors.email && <span className="text-danger"> {errors.email}</span>}
                </div>
                <div className="login-form2">
                    <label htmlFor="password"> Password</label>
                    <input type="password" placeholder="*******" name="password" 
                    onChange={handleInput} className="form-control rounded-0" ></input>
                    {errors.password && <span className="text-danger"> {errors.password}</span>}
                </div>
                <div className="btn_submit">
                    <button type="submit">Log In</button>
                    <Link to="/register"><button>Don't have an account? Register here.</button></Link>
                </div>
            </form>
        </div>
        </div>
        
      
    )
}


export default Login;