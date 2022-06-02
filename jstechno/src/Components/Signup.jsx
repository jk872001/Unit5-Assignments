    import React from 'react'
    import { useState,useEffect } from 'react';
    import "./Both.css";
    import {validEmail ,validPassword} from './Regrex';
    import axios from 'axios';

const initialstate=
{
full_name:"",
email:"",
password:"",
confirm_password:"",
};

    export const Signup = () => {
  const [state, setState]= useState(initialstate);
  const [data, setData] = useState([]);
  const {full_name,email,password,confirm_password} =state;
  const [emailError,setEmailErr] = useState(false);
  const [pwdError,setPwdError] = useState(false);
  const [match,setMatch]=useState(false);
  const api="http://localhost:8080/users"

        const handleChange =(e) =>{
        let { name, value }= e.target;
        setState({ ...state, [name]: value });
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(password!==confirm_password)
            {
                setPwdError(false);
                setEmailErr(false);
                setMatch(true);
                setState(()=>initialstate);
                return;
            }
            
        else if (!full_name || !email || !password || !confirm_password)
         {
        alert("Please fill all input field");
        } 
        else if(!validEmail.test(email) || !validPassword.test(password))
        {
            setMatch(false);
            setEmailErr(true);
            setPwdError(true);
            setState(()=>initialstate);
            return;
            }
        else 
        {
            setEmailErr(false);
            setPwdError(false);
          axios.post(`${api}`, state);
             alert("Added Successfully");
             setState(()=>initialstate);
          }
          };
        
      

    return (
        <div className='innerbox'>
        
            <div className='input_box'>
            <label>FULL NAME</label>
        <input
            type="text"
            name='full_name'
            value={full_name}
            onChange={handleChange}
            
            />
            </div>
        <div className='input_box'>
        <label>EMAIL</label>
        <input
            type="email"
            name='email'
            value={email}
            onChange={handleChange}
            />
            </div>
            <div className='input_box'>
            <label>PASSWORD</label>
            <input
            type="password"
            name='password'
            value={password}
            onChange={handleChange}
            />
            </div>
            <div className='input_box'>
            <label>CONFIRM PASSWORD</label>
            <input
            type="password"
            name='confirm_password'
            value={confirm_password}
            onChange={handleChange}
            />
            </div>
            
            <div>
            <button  className='button' onClick={handleSubmit}>SIGN UP</button>
            </div>

            {
                match?
                <div className='fail'>
                <p>Passwords are not matching</p>
                </div>:null}

                <div className='fail'>
                {(emailError || pwdError)&&<p>Invalid Email or Password</p>
            }
            
            </div>
            
            
            </div>
    )
    }

