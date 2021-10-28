import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, Navlink, useParams } from 'react-router-dom'

const Develops = () => {
    
    const {id} = useParams()
    console.log(id)


    const[develop, setDevelop] = useState([])

    const[event, setEvent] = useState([])

    const fetchData = async() =>{
        try{    

            const {data} = await axios.get('/event/:id')
            setEvent(data)
            console.log("data", data)

        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        
        const items = fetchData()
        console.log("items", items)
        setDevelop(items.develop)

    }, [])
    
    return (
        <div>
            <div className="mainTitle">
                <p className="p">PEGASUS LUXURY SERVICE</p>
                <p className="tour">ЭКСКУРСИИ</p>
                <p>текст экскурсии</p>
            </div>
            <div>
                <div>
                    <div>
                        история экскурсии
                    </div>
                    <div>
                        картинка
                    </div>
                    <div>
                        история экскурсии
                    </div>
                    <div>
                        картинка
                    </div>
                    <div>
                        обратитесь к нам по любмоу вопросу 
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Develops;