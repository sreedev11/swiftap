import React from 'react'
import img2 from '../images/divali.jpeg'
import img1 from '../images/logo.png'
import '../styles/Home.css'

export default function Home() {
  return (

    <>

    <main>
        <form method="POST" action="" className="formclass">
            <input type="text" id="search" placeholder="search model"/>
            <button type="submit">🔍</button>
        </form>
    </main>

    <section className="sidebar">
        <div className="card">
            <h1>Great Deals on Apple this Diwali</h1>
            <h2>Apple iPhones</h2>
            <p>Starting Price: ₹79,900 (iPhone 15)</p>
            <h2>Apple MacBooks</h2>
            <p>Starting Price: ₹89,900 (after discounts)</p>
            <h2>Apple Watches</h2>
            <p>Starting Price: ₹41,900 (after discounts)</p>
        </div>
        <div>
        <img src={img2}/>
        </div>
    </section>


    <footer id="foot">
        <aside>
        <img src={img1}/>
        </aside>
        <aside>
            <h3>Registered Office:</h3>
            <p>Manak Waste Management Pvt Ltd.| B-39, 1st Floor, Middle Circle, Connaught Place, New Delhi-110001, India, Support-7290068900 | CIN: U27205DL2009PTC190441
                </p>
        </aside>
        <aside>
            <h3>Disclaimer</h3>
            <p>All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.
                </p>
        </aside>
        <aside>
            <h3>Links</h3>
            
               
                <ul>
                    <li><i class="fa-brands fa-facebook"></i></li>
                    <li><i class="fa-brands fa-twitter"></i></li>
                    <li><i class="fa-brands fa-instagram"></i></li>
                    <li><i class="fa-brands fa-linkedin"></i></li>
                </ul>
        </aside>

    </footer>
    <footer>
        <p>Copyright @ 2024 SWIFTLAP All rights reserved</p>
    </footer>

    </>
  )
}
