import React from "react"
import { Link, Navlink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <div>
                <ul className="rectangle">
                    <li><Link to="/main" className="rectLink">ГЛАВНАЯ</Link></li>
                    <li className="razdel">|</li>
                    <li><Link to="/service" className="rectLink">СЕРВИС</Link></li>
                    <li className="razdel">|</li>
                    <li><Link to="/carpark" className="rectLink">АВТОПАРК</Link></li>
                    <li className="razdel">|</li>
                    <li><Link to="/development" className="rectLink">СОБЫТИЯ</Link></li>
                    <li className="razdel">|</li>
                    <li><Link to="/aboutus" className="rectLink">О НАС</Link></li>
                    <li className="razdel">|</li>
                    <li><Link to="/contacts" className="rectLink">КОНТАКТЫ</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;