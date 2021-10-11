import React from "react"
import { Link, Navlink } from 'react-router-dom'

const Carpark = () => {
    return (
        <div>
            <div className="main">
                <Link to="/main" className="linkActive">ГЛАВНАЯ</Link>
                <div className="razdel">|</div>
                <Link to="/development" className="link">СОБЫТИЯ</Link>
                <div className="razdel">|</div>
                <Link to="/tour" className="link">ЭКСКУРСИИ</Link>
            </div>
            <hr></hr>
            MainPage
        </div>
    )
}

export default Carpark;