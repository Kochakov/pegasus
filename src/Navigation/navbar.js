import React from "react"
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <div>
                <ul className="rectangle">
                    <li><NavLink to="/main" className="rectLink">ГЛАВНАЯ</NavLink></li>
                    <li className="razdel">|</li>
                    <li><NavLink to="/carpark" className="rectLink">АВТОПАРК</NavLink></li>
                    <li className="razdel">|</li>
                    <li><a href="https://pegasus-luxury.com/services/" className="rectLink">УСЛУГИ</a></li>
                    <li className="razdel">|</li>
                    <li><NavLink to="/tour" className="rectLink">ЭКСКУРСИИ</NavLink></li>
                    <li className="razdel">|</li>
                    <li><a href="https://pegasus-luxury.com/airports/" className="rectLink">АЭРОПОРТЫ</a></li>
                    <li className="razdel">|</li>
                    <li><a href="https://pegasus-luxury.com/about-us/" className="rectLink">О НАС</a></li>
                    <li className="razdel">|</li>
                    <li><a href="https://pegasus-luxury.com/contacts/" className="rectLink">КОНТАКТЫ</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;