import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import "./Cars.css"


function Car({ car }) {

    const [develop, setDevelop] = useState([])

    const [cars, setCars] = useState([])

    const fetchData = async () => {
        try {

            const { data } = await axios.get(`/car/${car._id}`)
            setCars(data)
            console.log("data", data)

        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {

        const items = fetchData()
        console.log("items", items)
        setDevelop(items.develop)

    }, [])


    return (
        <div className="carBox">
            <div>
                <a href={car.book}>
                    <img src={car.imgCar} />
                </a>
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: car.titleCar }} className="carTitle" />
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: car.descriptionCar }} />
            </div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: car.priceCar }} className="carPrice" />
            </div>
            <div className="carLinkContainer">
                <a href={car.book} className="carLink">ЗАБРОНИРОВАТЬ</a>
            </div>
        </div>
    )



}

export default Car