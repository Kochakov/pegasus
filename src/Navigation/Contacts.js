import React from "react"
import { Link, Navlink } from 'react-router-dom'

const Contacts = () => {
    return (
        <div>
        <div className="main">
                <Link to="/contacts" className="linkActive">КОНТАКТЫ</Link>
            </div>
            <hr></hr>
            contacts
        </div>
    )
}

export default Contacts;