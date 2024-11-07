import React from 'react';
import img from '../images/logo.png';
import '../styles/signup.css';

export default function Signup() {
  return (
    <div className="div1">
      <form className='formclass1'>
        <img src={img} style={{ width: '150px' }} alt="Logo" /><br />
        <h1>REGISTER HERE..</h1><br/>
        
        <label htmlFor="username">Name:</label><br/>
        <input type="text" id="username" name="username" placeholder="Username" /><br />
        
        <label htmlFor="email">Email:</label><br/>
        <input type="text" id="email" name="email" placeholder="Enter your Mail id" /><br />
        
        <label htmlFor="phn">Phone No:</label><br/>
        <input type="text" id="phn" name="phn" placeholder="Enter your phone number" /><br />
        
        <label htmlFor="pass">Password:</label><br/>
        <input type="password" id="pass" name="pass" placeholder="Set a password" /><br /><br />
        
        <input type="submit" value="Register" /><br/><br/>
        
        <h3>Have an account? <a href="/login">Login here</a></h3>
      </form>
    </div>
  );
}
