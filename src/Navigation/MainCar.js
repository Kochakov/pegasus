import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import "./MainCar.css"


function MainCar({ car }) {

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
        <div className="mainCarBox">
            <div className="mainOne">
                <a href={car.book}>
                    <img src={car.imgCar} className="mainImg"/>
                </a>
            </div>
            <div className="mainTwo">
                <div dangerouslySetInnerHTML={{ __html: car.titleCar }} className="mainCarTitle" />
            </div>
            <div className="mainThree">
                <div className="mainLastCarDesc">
                    <div dangerouslySetInnerHTML={{ __html: car.descriptionCar }} />
                </div>
                <div>
                    <div dangerouslySetInnerHTML={{ __html: car.priceCar }} className="mainCarPrice" />
                </div>
            </div>
            <div className="mainCarLinkContainer">
                <a href={car.book} className="mainCarLink">ЗАБРОНИРОВАТЬ</a>
            </div>
        </div>
    )



}

export default MainCar