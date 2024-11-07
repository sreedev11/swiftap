import React from 'react'
import {BrowserRouter,Route,Link, Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import '../styles/Routermain.css'
import img from '../images/logo.png'
import Signup from '../pages/Signup'



const Routermain = () => {
  return (
    
        <BrowserRouter>

      <header>
            <img src={img}/>
      </header>

          <nav className='nav'>
            <ul>
                <li><Link to="/Home">Home</Link></li>
                <li><a href="#foot">Contact</a></li>
                <li><Link to="/Login">Login</Link></li>
                <li><Link to="/Signup">Sign Up</Link></li>
                
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Signup' element={<Signup/>}/>
          


          </Routes>

        </BrowserRouter>
      
    
  )
}

export default Routermain
