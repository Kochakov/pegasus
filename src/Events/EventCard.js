import { useHistory } from "react-router"

const EventCard = ({ event }) => {

    let history = useHistory()


    function handleClick(){
        history.push("/tour/:id")
    }
    

    return (
        <div className="EventCard">

            <img src={event.firstBlockImg} className="img" />
            <div  className="theme" > {event.title}</div>
            <div className="date">{event.startDate} - {event.endDate}</div>
            <div className="text">{event.cardDescription}</div>
            <button className="more" onClick={handleClick}>ПОДРОБНЕЕ</button>

        </div>
    )
}


export default EventCard