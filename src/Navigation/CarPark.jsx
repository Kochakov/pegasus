import React, { useState, useEffect, Component } from "react"
import { Link, Navlink } from 'react-router-dom'
import axios from 'axios'
import './MainPage.css'
import ImageSlider from "../common/ImageSlider"
import { SliderData } from "../common/SliderData"
import ReactDOM from "react-dom";
// import Carousel from "react-simply-carousel";
import Car from "./Car"
import CarouselBox from "../common/CarouselBox"
import Carousel from "../Carousel/Carousel"
import MainCar from "./MainCar"
import tufl from "../images/tufl.jpg"





function Carpark() {



    const [activeSlideIndex, setActiveSlideIndex] = useState(0)


    const setActiveSlide = (newActiveSlideIndex) => {
        setActiveSlideIndex(newActiveSlideIndex)
    }

    const [develop, setDevelop] = useState([])

    const [cars, setCars] = useState([])

    const fetchData = async () => {
        try {

            const { data } = await axios.get(`/cars`)
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
        <div>
            <ImageSlider slides={SliderData} />
            <div className="timeWithComf">
                <div className="mainTitle">
                    <p className="p">
                        PEGASUS LUXURY SERVICE
                    </p>
                    <p className="comfortable">ПРОВЕДИТЕ ВРЕМЯ <br /> В КОМФОРТЕ</p>
                </div>
                <div>
                    <p className="timeText">
                        Мы поможем сэкономить ваше время и обеспечить комфортное передвижение. <br />
                        Автомобили из нашего собственного автопарка оснащены наилучшим <br />
                        оборудованием для вашего комфорта. <br />
                    </p>
                </div>
                <div className="timeDescr">
                    <div className='timeBlock'>

                        <div className="animated">
                            <h4>КОМФОРТ</h4>
                            <p className="timeP">Комфортные автомобили <br /> по комфортным ценам</p>
                        </div>
                        <div className='timeImg'>
                            <img src='https://pegasus-luxury.com/wp-content/uploads/2019/03/like.png' />
                        </div>
                    </div>
                    <div className='timeBlock'>

                        <div className="animated">
                            <h4>ОПЕРАТИВНОСТЬ</h4>
                            <p className="timeP">Всегда вовремя и всегда на <br /> шаг быстрее</p>
                        </div>
                        <div className='timeImg'>
                            <img src='https://pegasus-luxury.com/wp-content/uploads/2019/03/clock.png' />
                        </div>
                    </div>
                    <div className='timeBlock'>

                        <div className="animated">
                            <h4>БЕЗОПАСНОСТЬ</h4>
                            <p className="timeP">Новые авто и водители <br /> профессионалы</p>
                        </div>
                        <div className='timeImg'>
                            <img src='https://pegasus-luxury.com/wp-content/uploads/2019/03/shield.png' />
                        </div>
                    </div>
                    <div className='timeBlock'>

                        <div className="animated">
                            <h4>ОПЫТ</h4>
                            <p className="timeP">Девять лет успешного <br /> обслуживания</p>
                        </div>
                        <div className='timeImg'>
                            <img src='https://pegasus-luxury.com/wp-content/uploads/2019/03/globe.png' />
                        </div>
                    </div>
                </div>
            </div>
            <div className="textRazdel">
                Компания Pegasus Luxury Services в первую очередь заботится о комфорте <br />
                и безопасности своих клиентов во время путешествия. Персональный водитель <br />
                и индивидуальный подход – залог успешного сотрудничества.
            </div>
            <div className="carouselContainer">
                {cars &&
                    <Carousel show={4} lenghtList={cars.length}>
                        {cars.map(car => <MainCar car={car} />)}
                    </Carousel>}

                {/* <Carousel
                    activeSlideIndex={activeSlideIndex}
                    onRequestChange={setActiveSlide}
                    itemsToShow={3}
                    itemsToScroll={1}
                > 

                     
                     <div style={{ width: 300, height: 300 }}>slide 0</div>
                    <div style={{ width: 300, height: 300 }}>slide 1</div>
                    <div style={{ width: 300, height: 300 }}>slide 2</div>
                    <div style={{ width: 300, height: 300 }}>slide 3</div>
                    <div style={{ width: 300, height: 300 }}>slide 4</div>
                    <div style={{ width: 300, height: 300 }}>slide 5</div>
                    <div style={{ width: 300, height: 300 }}>slide 6</div>
                    <div style={{ width: 300, height: 300 }}>slide 7</div>
                    <div style={{ width: 300, height: 300 }}>slide 8</div>
                    <div style={{ width: 300, height: 300 }}>slide 9</div>
                </Carousel> */}
            </div>

            {/* <CarouselBox /> */}

            <div className="buisnessTransfer">
                <div className="buisness">
                    <div className="titleContainer">
                        <p className="p">
                            pegasus luxury services
                        </p>
                        <div className="buisnessTitlte">БИЗНЕС ТРАНСФЕР</div>
                    </div>
                    <div className="razd"></div>
                    <div className="buisnessText">
                        <p>Компания  Pegasus <span> Luxury  Services </span> сотрудничает с отелями и аэропортами Лондона. Это позволяет нам оперативно осуществлять <br />
                            дополнительные услуги для своих клиентов. Мы ценим ваше время, поэтому самостоятельно забронируем для вас нужный отель, <br />
                            наиболее оптимальным образом спланируем поездку, чтобы вы не опоздали на деловую встречу или самолёт. От вас требуется <br />
                            лишь указать необходимую дату и время, обо всём остальном позаботятся наши профессиональные сотрудники.</p>

                        <p>Мы мониторим все рейсы наших клиентов в режиме реального времени. Если вы заказали трансфер и ваш рейс задерживается, <br />
                            то мы предоставляем возможность бесплатного ожидания в течение 45 минут. Наш опытный водитель встретит вас с именной <br />
                            табличкой в аэропорту, поможет погрузить багаж и довезёт до пункта назначения. Индивидуальный трансфер на такси класса <br />
                            люкс — это максимально комфортный способ добраться до любого аэропорта Лондона либо любого другого нужного вам места.</p>

                        <p>Находясь внутри салона автомобиля Pegasus   <span> Luxury Services  </span> вы можете полностью расслабиться либо продолжить заниматься <br />
                            бизнесом в комфортной обстановке. Вы можете использовать каждый наш автомобиль в качестве роскошного передвижного <br />
                            кабинета — подписать бумаги, прочитать договор или провести деловые переговоры.</p>
                    </div>
                    <div className="razd"></div>
                    <div className="advant">
                        <p>НАШИ ПРЕИМУЩЕСТВА</p>
                    </div>
                    <div className="advantages">
                        <div className="section">
                            <div>
                                <img src="https://pegasus-luxury.com/wp-content/uploads/2019/07/vifi.png" />
                            </div>
                            <div className="razd"></div>
                            <div> БЕСПЛАТНЫЙ<br />
                                ВАЙФАЙ
                            </div>
                        </div>
                        <div className="section">
                            <div>
                                <img src="https://pegasus-luxury.com/wp-content/uploads/2019/07/card.png" />
                            </div>
                            <div className="razd"></div>
                            <div> ОПЛАТА<br />
                                КАРТОЙ
                            </div>
                        </div>
                        <div className="section">
                            <div>
                                <img src="https://pegasus-luxury.com/wp-content/uploads/2019/07/water.png" />
                            </div>
                            <div className="razd"></div>
                            <div> ПРОХЛАДИТЕЛЬНЫЕ <br />
                                НАПИТКИ
                            </div>
                        </div>
                        <div className="section">
                            <div>
                                <img src="https://pegasus-luxury.com/wp-content/uploads/2019/07/ipod.png" />
                            </div>
                            <div className="razd"></div>
                            <div> ТАРИФЫ <br />
                                «ВСЕ ВКЛЮЧЕНО»
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="highService">
                    <p>
                        pegasus luxury services
                    </p>
                    <div className="highServiceTitle">ВЫСОКОКАЧЕСТВЕННОЕ ОБСЛУЖИВАНИЕ</div>
                </div>
                <div className="highContainer">
                    <div className="highLeft">
                        <div>
                            <img src="https://pegasus-luxury.com//wp-content/uploads/2019/01/highservice1.jpg" />
                        </div>
                        <div className="imgString">
                            <div>
                                <img src="https://pegasus-luxury.com/wp-content/uploads/2019/04/min_img4.jpg" />
                            </div>
                            <div>
                                <img src="https://pegasus-luxury.com/wp-content/uploads/2018/08/servicesBlock6Img.jpg" />
                            </div>
                        </div>
                        <div>
                            <img src="https://pegasus-luxury.com/wp-content/uploads/2019/01/highservice2.jpg" />
                        </div>
                    </div>
                    <div className="highRight">
                        <div>
                            <p>Мы занимаемся трансфером и перевозкой пассажиров с 2010 года, постоянно <br />
                                совершенствуемся, добавляем новые услуги, параллельно улучшая качество уже <br />
                                существующих. Главная задача компании Pegasus Luxury Services заключается в обеспечении <br />
                                высококачественного обслуживания наших клиентов.</p>
                        </div>
                        <div>
                            <p>Для каждого трансфера мы используем автомобили класса люкс. К вашим услугам самые <br />
                                роскошные модели от лучших мировых производителей. Все автомобили оснащены <br />
                                новейшими технологиями, обеспечивающими безопасность и высокий уровень комфорта <br />
                                пассажиров во время трансфера.</p>
                        </div>
                        <div>
                            <p>Вы можете выбрать любую из предоставляемых нами шикарных моделей автомобилей и, в <br />
                                случае необходимости, заказать трансфер в несколько точек назначения. Каждый наш <br />
                                автомобиль не старше трех лет, поддерживается в безукоризненном состоянии и постоянно <br />
                                проходит технический осмотр.</p>
                        </div>
                        <div>
                            <p>Водители Pegasus Luxury Services постоянно саморазвиваются, повышая уровень <br />
                                квалификации на профессиональных курсах и семинарах. Каждый из водителей знает в <br />
                                совершенстве как минимум 2 языка: русский и английский. Все водители действуют в <br />
                                соответствии со строгими правилами компании, они вежливы, учтивы и дружелюбны, <br />
                                соблюдают дресс-код и идеально ориентируются по городу.</p>
                        </div>
                        <div>
                            <p>Наш Консьерж — Мы также рады предоставить для вас ряд дополнительных услуг: <br />
                                бронирование отелей, заказ билетов на спортивные или культурные мероприятия, <br />
                                организация экскурсий и особенных событий (Дни рождения, свадьбы, и другие праздники), <br />
                                предоставление личной охраны или частного самолета.</p>
                        </div>
                        <div>
                            <p>Если у вас есть какие-либо пожелания, вы можете обратиться к нашим специалистам и они <br />
                                вам помогут. Мы подскажем самые интересные места и ответим на все интересующие вас <br />
                                вопросы.</p>
                        </div>
                        <div className="leftTitle">
                            УЗНАЙТЕ БОЛЬШЕ ИНФОРМАЦИИ О НАС
                        </div>
                        <a href="https://pegasus-luxury.com/about-us/" className="carLink">ПОДРОБНЕЕ</a>
                    </div>
                </div>

                <div className="taxi">
                    <div className="taxiOne">
                        <div className="taxiImgOne">
                            <img  className="taxiImg" src="https://pegasus-luxury.com/wp-content/uploads/2020/04/tufl.png"/>
                        </div>
                        <div className="taxiDescOne">
                            <div className="taxiTitle">
                                <p>
                                    PEGASUS LUXURY SERVICES</p>
                                <div  className="taxiBigTitle">
                                    АРЕНДА АВТО <br />
                                    С ВОДИТЕЛЕМ
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Аренда автомобиля с водителем в Лондоне — идеальная услуга для деловых <br />
                                        людей, руководителей, топ-менеджеров, которые ценят свое время, предпочитают <br />
                                        исключать случайности, неувязки в пути. Комфортабельные авто люкс-класса <br />
                                        позволяют клиентам чувствовать себя уверенно при пребывании в незнакомой <br />
                                        стране.</p>
                                </div>
                                <div>
                                    <p> Воспользуйтесь услугой аренды автомобилей бизнес и люкс класса с водителем, <br />
                                        чтобы получить полное впечатление от вашей поездки. </p>
                                </div>
                                <div>
                                    <p> Данную услугу рекомендуется заказывать заблаговременно, что позволит вам быть <br />
                                        уверенными, что данный автомобиль и водитель будет закреплен именно только за <br />
                                        вами.</p>
                                </div>
                            </div>
                            <button className="carLink" >ПОДРОБНЕЕ</button>
                        </div>
                    </div>
                    <div className="taxiOne">
                        <div className="taxiDescOne">
                            <div className="taxiTitle">
                            <p>
                                    PEGASUS LUXURY SERVICES</p>
                                <div  className="taxiBigTitle">
                                    РУССКОЕ ТАКСИ <br />
                                    В ЛОНДОНЕ
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>Воспользовавшись нашей услугой – русское такси в Лондоне, вы имеете ряд <br /> 
                                    преимуществ. По вашему звонку приедет русскоговорящий водитель, который <br /> 
                                    знает Лондон как свои пять пальцев. Вам не придётся использовать переводчик, <br />
                                    чтобы объясняться с водителем. Вас ждёт приятная беседа с настоящим <br />
                                    профессионалом и по совместительству отличным гидом. Обратившись к нам, вы <br />
                                    обретёте в нашем лице надёжного помощника, который не подведёт вас.</p>
                                </div>
                                <div>
                                    <p>Русское такси в Лондоне — отличное решение для каждого туриста.</p>
                                </div>
                            </div>
                            <button className="carLink" >ПОДРОБНЕЕ</button>
                        </div>
                        <div className="taxiImgOne">
                            <img src="https://pegasus-luxury.com/wp-content/uploads/2020/03/ntl2.png" />
                        </div>
                    </div>
                    <div className="taxiOne">
                        <div className="taxiImgOne">
                            <img src="https://pegasus-luxury.com/wp-content/uploads/2020/03/ntl3.png" />
                        </div>
                        <div className="taxiDescOne">
                        <div className="taxiTitle">
                            <p>
                                    PEGASUS LUXURY SERVICES</p>
                                <div className="taxiBigTitle">
                                   ТРАНСФЕР В ЛОНДОНЕ <br />
                                   И ВЕЛИКОБРИТАНИИ
                                </div>
                            </div>
                            <div>
                                <div>
                                    <p>С 2010 года мы предоставляет качественные услуги трансфера. В любое время, в <br /> 
                                    короткие сроки, мы можем организовать для вас комфортный трансфер в аэропорт, <br />
                                    ЖД вокзал, морской порт или в любую точку Великобритании , а так же встретить <br />
                                    из них.</p>
                                </div>
                                <div>
                                    <p>Mercedes S class, Mercedes V class, Mercedes E class — новые автомобили и <br />
                                    безупречный сервис!</p>
                                </div>
                                <div>
                                    <p></p>
                                </div>
                            </div>
                            <button className="carLink" >ПОДРОБНЕЕ</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Carpark;


