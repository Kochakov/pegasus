import React from "react"
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <div>
                <ul className="rectangle">
                    <li><NavLink to="/main" className="rectLink">ГЛАВНАЯ</NavLink></li>
                    <li className="razdel">|</li>
                    <li><NavLink to="/service" className="rectLink">УСЛУГИ</NavLink></li>
                    <li className="razdel">|</li>
                    <li><NavLink to="/tour" className="rectLink">ЭКСКУРСИИ</NavLink></li>
                    <li className="razdel">|</li>
                    <li><NavLink to="/development" className="rectLink">СОБЫТИЯ</NavLink></li>
                    <li className="razdel">|</li>
                    <li><NavLink to="/aboutus" className="rectLink">О НАС</NavLink></li>
                    <li className="razdel">|</li>
                    <li><NavLink to="/contacts" className="rectLink">КОНТАКТЫ</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;