import { useHistory, useParams } from "react-router"

const EventCard = ({ event }) => {

    let history = useHistory()

    function handleClick() {
        history.push(`/tour/${event._id}`)
    }


    return (
        <div className="EventCard">
            <a href={`/tour/${event._id}`} className="imgBackground">
                <img src={event.firstBlockImg} className="img" />
            </a>
            <div className="theme" > {event.title}</div>
            <div className="date">{event.startDate} - {event.endDate}</div>
            <div className="text">{event.cardDescription}</div>
            <button className="more" onClick={handleClick}>ПОДРОБНЕЕ</button>

        </div>
    )
}


export default EventCard