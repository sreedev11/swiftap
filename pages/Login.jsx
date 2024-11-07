import React from 'react'
import '../styles/login.css'
import img1 from '../images/logo.png'

export default function Login() {
  return (
    <>
     <div className="div1">
        <form  className="loginform">
          <img src={img1}/>
          <h1 style={{ color: 'aliceblue' }}>LOGIN</h1>
          <br />
          <input type="text" name="username" id="username" placeholder="USERNAME" />
          <br />
          <input type="password" name="pass" id="pass" placeholder="PASSWORD" />
          <br />
          <input type="button" value="login" />
          <br /><br />
          <h2 style={{ color: 'aliceblue', marginBottom: '-13px' }}>or don't have an account</h2>
          <br />
          <input type="button" value="sign up" />
          <br />
          <a href="#" className="forgot-password">Forgot Password?</a>
          <br />
          <input type="button" value="Back" />
        </form>
      </div>
    </>
  )
}
