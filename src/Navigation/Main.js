import React from "react"
import one from './block/one.png';
import two from './block/two.png';
import three from './block/three.png';
import four from './block/four.png';
import five from './block/five.png';
import six from './block/six.png';
import { Link, Navlink } from 'react-router-dom'


const Main = () => {
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
                Lorem ipsum dolor sit amet, consectetur adipisiciting, sed do eiusmod tempor incidunt ut labore et
                <br></br> dolore magna aliqua. Ut enim ad minimum veniam, quis nostrud exercitation ullamco laboris nisi ut
                <br></br> aliquio ex ea commodo consequat.
                <br></br>
                <br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore eu fugiat nulla pariatur.
                <br></br> Excepteur sint occaecat cupidatat non proiden, sunt.
            </div>
            <div className="container">
                <div className="item item-1">
                    <img src={one} alt="" className="img" />
                    <p className="theme-1">ELEVATE YOU EXPERIENCE</p>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisiciting, sed do eiusmod tempor
                        <br></br> incidunt ut labore et dolore magna aliqua. Ut enim ad minimum veniam, quis nostrud
                        <br></br> exercitation ullamco laboris nisi ut aliquio ex ea commodo consequat.
                        <br></br>
                        <br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore eu fugiat
                        <br></br>nulla pariatur. Excepteur sint occaecat cupidatat non proiden, sunt in culpa qui officia
                        <br></br>deserunt mollit anim id est laborum.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
                <div className="item item-2">
                    <img src={two} alt="" className="img" />
                    <p className="theme-2">FARNBOROUGH AIRSHOW 2018</p>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisiciting, sed do eiusmod tempor
                        <br></br> incidunt ut labore et dolore magna aliqua. Ut enim ad minimum veniam, quis nostrud
                        <br></br> exercitation ullamco laboris nisi ut aliquio ex ea commodo consequat.
                        <br></br>
                        <br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore eu fugiat
                        <br></br>nulla pariatur. Excepteur sint occaecat cupidatat non proiden, sunt in culpa qui officia
                        <br></br>deserunt mollit anim id est laborum.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
                <div className="item item-3">
                    <img src={three} alt="" className="img" />
                    <p className="theme-3">REGGATTA IN ENGLAND</p>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisiciting, sed do eiusmod tempor
                        <br></br> incidunt ut labore et dolore magna aliqua. Ut enim ad minimum veniam, quis nostrud
                        <br></br> exercitation ullamco laboris nisi ut aliquio ex ea commodo consequat.
                        <br></br>
                        <br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore eu fugiat
                        <br></br>nulla pariatur. Excepteur sint occaecat cupidatat non proiden, sunt in culpa qui officia
                        <br></br>deserunt mollit anim id est laborum.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
                <div className="item item-4">
                    <img src={four} alt="" />
                    <p className="theme-4">SILVERSTONE</p>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisiciting, sed do eiusmod tempor
                        <br></br> incidunt ut labore et dolore magna aliqua. Ut enim ad minimum veniam, quis nostrud
                        <br></br> exercitation ullamco laboris nisi ut aliquio ex ea commodo consequat.
                        <br></br>
                        <br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore eu fugiat
                        <br></br>nulla pariatur. Excepteur sint occaecat cupidatat non proiden, sunt in culpa qui officia
                        <br></br>deserunt mollit anim id est laborum.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
                <div className="item item-5">
                    <img src={five} alt="" />
                    <p className="theme-5">WIMBLEDON</p>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisiciting, sed do eiusmod tempor
                        <br></br> incidunt ut labore et dolore magna aliqua. Ut enim ad minimum veniam, quis nostrud
                        <br></br> exercitation ullamco laboris nisi ut aliquio ex ea commodo consequat.
                        <br></br>
                        <br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore eu fugiat
                        <br></br>nulla pariatur. Excepteur sint occaecat cupidatat non proiden, sunt in culpa qui officia
                        <br></br>deserunt mollit anim id est laborum.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
                <div className="item item-6">
                    <img src={six} alt="" />
                    <p className="theme-6">LOREM IPSUM</p>
                    <div className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisiciting, sed do eiusmod tempor
                        <br></br> incidunt ut labore et dolore magna aliqua. Ut enim ad minimum veniam, quis nostrud
                        <br></br> exercitation ullamco laboris nisi ut aliquio ex ea commodo consequat.
                        <br></br>
                        <br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cilum dolore eu fugiat
                        <br></br>nulla pariatur. Excepteur sint occaecat cupidatat non proiden, sunt in culpa qui officia
                        <br></br>deserunt mollit anim id est laborum.
                        <button className="more">ПОДРОБНЕЕ</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;