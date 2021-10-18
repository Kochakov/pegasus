import React from "react"
import { Link, Navlink, useParams } from 'react-router-dom'

const Develops = () => {
    
    const {id} = useParams()
    console.log(id)
    
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