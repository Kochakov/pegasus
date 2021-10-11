import React from "react"
import { Link, Navlink } from 'react-router-dom'

const Development = () => {
    return (
        <div>
        <div className="main">
                <Link to="/main" className="link">ГЛАВНАЯ</Link>
                <div className="razdel">|</div>
                <Link to="/development" className="linkActive">СОБЫТИЯ</Link>
                <div className="razdel">|</div>
                <Link to="/tour" className="link">ЭКСКУРСИИ</Link>
            </div>
            <hr></hr>
            developments
        </div>
    )
}

export default Development;