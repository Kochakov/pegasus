import React from "react"
import { Link, Navlink } from 'react-router-dom'
import footer from './footer.png';

const Footer = () => {
    return (
        <nav>
            <div className="footerInfo">
                <div>
                    <div className="podcherk"><Link to="/carpark" className="footerLink">НАШИ МАШИНЫ</Link></div>
                    <ul className="ul">

                        <li ><a href="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/s-class/saloon-wv223/explore.html" className="footerLink">Mercedes S-class</a></li>
                        <li ><a href="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/v-class/v-class-mpv-fl/explore.html" className="footerLink">Mercedes V-class</a></li>
                        <li ><a href="https://www.mercedes-benz.ru/passengercars/mercedes-benz-cars/models/e-class/saloon-w213-fl/explore.html" className="footerLink">Mercedes E-class</a></li>
                        <li ><a href="https://www.rolls-roycemotorcars.com/ru_RU/showroom/ghost.html" className="footerLink">Rolls-Royce Ghost</a></li>
                        <li ><a href="https://www.rolls-roycemotorcars.com/ru_RU/showroom/phantom-extended.html" className="footerLink">Rolls-Royce Phantom</a></li>
                        <li ><a href="https://preowned.bentleymotors.com/eu/ru/bentley/mulsanne" className="footerLink">Bentley Mulsanne</a></li>
                    </ul>
                </div>

                <div>
                    <div className="podcherk"><Link to="/service" className="footerLink">НАШ СЕРВИС</Link></div>
                    <ul className="ul">

                        <li ><Link to="/corporate_taxi" className="footerLink">Корпоративное такси</Link></li>
                        <li ><Link to="/personal_driver" className="footerLink">Личный водитель</Link></li>
                        <li ><Link to="/business_meeting" className="footerLink">Бизнес встречи</Link></li>
                        <li ><Link to="/airports" className="footerLink">Аэропорты</Link></li>
                        <li ><Link to="/development" className="footerLink">События</Link></li>
                        <li ><Link to="/main" className="footerLink">Экскурсии</Link></li>
                    </ul>
                </div>

                <div>
                    <div className="podcherk"><Link to="/aboutus" className="footerLink">О НАС</Link></div>
                    <ul className="ul">

                        <li ><Link to="/rules" className="footerLink">Правила и условия</Link></li>
                        <li ><Link to="/aboutus" className="footerLink">О нас</Link></li>
                        <li ><Link to="/airports" className="footerLink">Аэропорты</Link></li>
                        <li ><Link to="/contacts" className="footerLink">Контакты</Link></li>
                        <li ><Link to="/blog" className="footerLink">Блог</Link></li>
                        <li ><Link to="/carpark" className="footerLink">Автопарк</Link></li>
                    </ul>
                </div>
                <div className="footerButton">
                    <button className="footerBtn">  СДЕЛАТЬ ЗАКАЗ </button>
                    <button className="footerBtn">  УЗНАТЬ ТАРИФ </button>
                    <div className="numberAndPages">
                        +44 020 7719 8816
                        <div className="sub">КРУГЛОСУТОЧНО</div>
                        +44 777 100 7676
                        <div className="sub">VIBER&WHATSUP</div>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Footer;