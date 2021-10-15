import React, {useState, useEffect} from "react"
import { Link, Navlink } from 'react-router-dom'
import axios from 'axios'

function Carpark(){


    const [message, setMessage] = useState()

    const fetchData = async() => {
        try{
            
            const {data} = await axios.get('/main')
            setMessage(data.message)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        
        const items = fetchData()
        console.log(items)
        setMessage(items.message)

    }, [])

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
                <p>
                {
                    message ? message : "Loading..."
                }
                </p>
        </div>
    )
}

export default Carpark;