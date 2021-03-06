import axios from "axios"
import React, { useEffect, useState } from "react"
import { Link, Navlink, useParams } from 'react-router-dom'
import "./Develops.css"

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
                <p className="eventDescription" dangerouslySetInnerHTML={{ __html: event.description }} />
            </div>
            <div>
                <div className="firstBlock">
                    <div className="firstBlockBackground">
                        <div className="firstBlockBody">
                            <div className="firstBlockTitle">  {event.firsBlockTitle}</div>
                            <div className="firstBlockBodyPodcherk"></div>
                            <div className="firstBlockText">
                                <div dangerouslySetInnerHTML={{ __html: event.firstBlockDescription }} />
                                <br></br>
                                <div dangerouslySetInnerHTML={{ __html: event.firstBlockDescriptionTwo }} />
                            </div>
                        </div>
                        <img src={event.firstBlockImg} className="eventImg" />
                    </div>
                </div>
                <div className="secondBlock">
                    <div className="eventSecondImg">
                        <img src={event.secondBlockImg} />
                    </div>
                    <div>
                        <div className="secondBlockTitle">  {event.secondBlockTitle}</div>
                        <div className="firstBlockBodyPodcherk"></div>
                        <div>
                            <div dangerouslySetInnerHTML={{ __html: event.secondBlockDescription }} />
                            <br></br>
                            <div dangerouslySetInnerHTML={{ __html: event.secondBlockDescriptionTwo }} />
                        </div>
                    </div>
                </div>
                <div>
                <div className="secondBlockDescriptionThree" dangerouslySetInnerHTML={{ __html: event.secondBlockDescriptionThree }} />

                    <div className="pst" dangerouslySetInnerHTML={{ __html: event.pst }} />

                </div>
                <div className="address">
                    <div className="adressText">
                        <div className="secondBlockTitle">
                            ???????????????????? ?? ?????? <br />
                            ???? ???????????? <br />
                            ??????????????
                        </div>
                        <div className="firstBlockBodyPodcherk"></div>
                        <div>
                            ?????????????????? ?????? ?????????????? ???? ???????????? +44 20 7719 8816 <br />
                            ?????? ?????????????????? ?????????????? ?????????? ?????? ?????????? ?? ????????.
                            <br />
                            <br />
                            ?? ?????????????? ?????????? ?????? ???????????????????? ???????????????? ?? ???????? ???? <br />
                            ?????????? ?? ?????????????? ???? ?????? ???????? ??????????????.
                        </div>
                    </div>
                    <div className="textAreas">
                        <input className="inputAreas" placeholder="?????????????? ??????" />
                        <input className="inputAreas" type="email" placeholder="?????????????? e-mail*" />
                        <textarea className="inputAreasTXT" placeholder="?????????????? ??????????????????" />
                        <button className="sendButton">?????????????????? ??????????????????</button>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Develops;