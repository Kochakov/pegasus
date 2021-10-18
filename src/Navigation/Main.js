import React, {useState, useEffect} from "react"
import one from './block/one.png';
import two from './block/two.png';
import three from './block/three.png';
import four from './block/four.png';
import five from './block/five.png';
import six from './block/six.png';
import { Link, Navlink } from 'react-router-dom'
import axios from 'axios'




function Main(){

    const[develop, setDevelop] = useState()

    const[events, setEvents] = useState()

    const fetchData = async() =>{
        try{    

            const {data} = await axios.get('/events')
            setEvents(data)
            console.log(data)

        }catch(err){
            console.log(err)
        }
    }
``
    useEffect(() => {
        
        const items = fetchData()
        console.log(items)
        setDevelop(items.develop)

    }, [])

    return (
      
        <div className="otstyp">
            <div className="main">
                <Link to="/main" className="link">ГЛАВНАЯ</Link>
                <div className="razdel">|</div>
                <Link to="/development" className="link">СОБЫТИЯ</Link>
                <div className="razdel">|</div>
                <Link to="/tour" className="linkActive">ЭКСКУРСИИ</Link>
            </div>
            <hr></hr>
            <div className="mainTitle">
                <p className="p">PEGASUS LUXURY SERVICE</p>
                <p className="tour">ЭКСКУРСИИ</p>
            </div>
            <div className="text">
                Мы предлагаем ряд шикарных автомобилей для осуществления безопасных поездок на интересные мероприятия и помогаем сделать их посещение
                <br></br> незабываемым. Роскошный автомобиль позволяет получить ещё больше приятных эмоций. Насладитесь высоким уровнем комфорта вместе с безупречным
                <br></br> сервисом от Pegasus Luxury Services.
                <br></br>
                <br></br>
                Позвольте себе первоклассные транспортные услуги от профессиональных опытных водителей автомобилей класса люкс.
            </div>
            <div className="container">
                <div className="item item-1">
                    <img src={one} alt="" className="img" />
                    <p className="theme-1">ELEVATE YOU EXPERIENCE</p>
                    <div className="text">
                    Это событие стоит посетить даже если вы не являетесь поклонником тенниса.
                        <br></br> Современный стадион, профессиональные спортсмены, дружелюбный и
                        <br></br> услужливый персонал, красивые клумбы с цветами. Это очень интересное место.
                        <br></br> За дополнительную плату можно посетить музей. Есть много магазинов. Хороший
                        <br></br> выбор ресторанов, предлагающих широкий выбор блюд и закусок. Билеты на
                        <br></br>Уимблдонский турнир достать непросто. Но не волнуйтесь, компания Pegasus
                        <br></br>Luxury Services уже обо всём позаботилась для вас.
                        <button className="more" onClick={fetchData}>ПОДРОБНЕЕ</button>
                    
                    </div>
                </div>
                <div className="item item-2">
                    <img src={two} alt="" className="img" />
                    <p className="theme-2">FARNBOROUGH AIRSHOW 2020</p>
                    <div className="text">
                    Навряд ли вам ещё удастся увидеть где-нибудь такое же богатое разнообразие
                        <br></br> самолётов как на главной авиавыставке года в Аэропорту Фарнборо: винтажные
                        <br></br> модели, реактивные истребители, демонстрирующие высший пилотаж,
                        <br></br> крупнейшие коммерческие авиалайнеры. Вас ждёт увлекательное авиашоу, на
                        <br></br> котором будут продемонстрированы современные технологии и инновации. Это
                        <br></br> мероприятие очень любят дети, организаторы приготовили для них много
                        <br></br> интересного.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
                <div className="item item-3">
                    <img src={three} alt="" className="img" />
                    <p className="theme-3">HENLEY ROYAL REGATTA</p>
                    <div className="text">
                    Одно из главных событий Великобритании. Великолепно организованное
                        <br></br> прекрасное спортивное мероприятие. Фантастическая атмосфера благодаря
                        <br></br> строгому дресс-коду. Отличная возможность модно и стильно одеться,
                        <br></br> насладиться хорошей музыкой и конечно же греблей. Блестящие вечерние
                        <br></br> развлечения. Вы можете заказать себе приятный обед и чай в больших палатках.
                        <br></br> Здесь очень тяжело найти парковку, но не волнуйтесь, компания Pegasus Luxury
                        <br></br> Services уже обо всём позаботилась для вас.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
                <div className="item item-4">
                    <img src={four} alt="" />
                    <p className="theme-4">SILVERSTONE FORMULA 1</p>
                    <div className="text">
                    Здесь проходит британская Formula 1. Захватывающее событие для всех
                        <br></br> любителей гонок или эпичных зрелищ. Великолепная атмосфера фестиваля вряд
                        <br></br> ли сможет оставить вас равнодушными. Хорошая организация, приятный и
                        <br></br> вежливый персонал. Отличная возможность отдохнуть с семьёй или друзьями.
                        <br></br> Много развлечений для разных возрастных групп, много интересного для детей.
                        <br></br> Еда и напитки на любой вкус. Есть возможность совершать покупки при помощи
                        <br></br> карты.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
                <div className="item item-5">
                    <img src={five} alt="" />
                    <p className="theme-5">WIMBLEDON</p>
                    <div className="text">
                    Это событие стоит посетить даже если вы не являетесь поклонником тенниса.
                        <br></br> Современный стадион, профессиональные спортсмены, дружелюбный и
                        <br></br> услужливый персонал, красивые клумбы с цветами. Это очень интересное место.
                        <br></br> За дополнительную плату можно посетить музей. Есть много магазинов. Хороший
                        <br></br> выбор ресторанов, предлагающих широкий выбор блюд и закусок. Билеты на
                        <br></br>Уимблдонский турнир достать непросто. Но не волнуйтесь, компания Pegasus
                        <br></br>Luxury Services уже обо всём позаботилась для вас.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
                <div className="item item-6">
                    <img src={six} alt="" />
                    <p className="theme-6">СКАЧКИ ROYAL ASCOT</p>
                    <div className="text">
                    Вот уже несколько веков английские скачки очаровывают как англичан, так и
                        <br></br> приезжих, они славятся своей зрелищностью на весь мир. Принимающие участие
                        <br></br> в забеге лошади обладают длинной родословной. Одни зрители делают ставки,
                        <br></br> другие просто наслаждаются динамикой происходящего, царящей вокруг
                        <br></br> атмосферой азарта и конечно же профессионализмом жокеев. Лучше всего
                        <br></br> самому увидеть это воочию, заказав себе шикарный автомобиль от компании
                        <br></br> Pegasus Luxury Services.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Main;