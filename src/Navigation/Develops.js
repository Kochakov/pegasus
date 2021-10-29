import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, Navlink, useParams } from 'react-router-dom'

const Develops = () => {

    const { id } = useParams()
    console.log(id)


    const [develop, setDevelop] = useState([])

    const [event, setEvent] = useState([])

    const fetchData = async () => {
        try {
            const { data } = await axios.get(`/event/${id}`)
            setEvent(data)
            console.log("This id", data)

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
        <div>
            <div className="mainTitle">
                <p className="p">PEGASUS LUXURY SERVICE</p>
                <p className="tour">{event.title}</p>
                <p>{event.description}</p>
            </div>
            <div>
                <div>
                    <div>
                        <div>{event.firsBlockTitle}</div>
                        <div>{event.firstBlockDescription}</div>
                    </div>
                    <img src={event.firstBlockImg} />
                </div>
                <div>
                    <img src={event.secondBlockImg} />
                    <div>
                        <div>{event.secondBlockTitle}</div>
                        <div>{event.secondBlockDescription}</div>
                    </div>
                </div>
                <div>
                    Royal Ascot — это чуть ли не единственное место, где вы можете увидеть королеву.
                    Впервые она посетила Royal Ascot в 1945 году, в возрасте 19 лет. В ранние годы своего правления она скакала галопом по дорожке поутру, перед началом скачек. В 1960 году она заняла четвёртое место среди остальных участников неофициальной «гонки». В период скачек Royal Ascot королева и её процессия каждый день проезжают прямо перед трибунами, ровно в 2 часа дня.
                </div>
                <div>
                    <div>
                        <div>
                            обратитесь к нам по любому вопросу
                        </div>
                        <div>
                            Позвоните нам сегодня по номеру +44 20 7719 8816 или заполните простую форму для связи с нами.

                            В рабочее время наш специалист свяжется с вами по почте и ответит на все ваши вопросы.
                        </div>
                    </div>
                    <div>
                        имэил, логин, сообщение, кнопка отправить
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Develops;