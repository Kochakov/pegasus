import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './style.css';
import MyButton from "./MyButton";

import Navbar from './Navigation/navbar'
import Service from "./Navigation/Service";
import Main from "./Navigation/Main";
import Carpark from "./Navigation/CarPark";
import Development from "./Navigation/Development";
import Aboutus from "./Navigation/AboutUs";
import Contacts from "./Navigation/Contacts";
import Develops from "./Navigation/Develops";
import Cars from "./Navigation/Cars";


import Footer from './Footer/Footer'
import Blog from "./Footer/Blog";
import Rules from "./Footer/Rules";
import Excursion from "./Footer/Excursion";
import Airports from "./Footer/Airports";
import BusinessMeeting from "./Footer/BusinessMeeting";
import PersonalDriver from "./Footer/PersonalDriver";
import CorporateTaxi from "./Footer/CorporateTaxi";


import logo from './images/logo.png';




const updatePage = (e) => {
  e.preventDefault()
  console.log('press button')
}

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <header className="header">
          <div className="lineNumber">
            <div className="number">
              <div className="p">+44 20 7719 8816</div>
              <div> <span className="colorText">круглосуточно</span></div>
            </div>

            <div className="number">
              <div className="p">+44 777 100 7676</div>
              <div className="p"><span className="colorText">Viber&WhatSup</span></div>
            </div>
          </div >
          <div>
            <img src={logo} alt="logo" className="logo" />
          </div>
          <form className="lineButtom">
            <MyButton onClick={updatePage}> УЗНАТЬ ТАРИФ </MyButton>
            <button className="button">  СДЕЛАТЬ ЗАКАЗ </button>
          </form>
        </header>
        <Navbar />
        <Switch>
          <Route path='/main' component={Carpark} />
          <Route path='/service' component={Service} />
          <Route exact path='/tour' component={Main} />
          <Route path='/development' component={Development} />
          <Route path='/aboutus' component={Aboutus} />
          <Route path='/contacts' component={Contacts} />
          <Route path='/blog' component={Blog} />
          <Route path='/rules' component={Rules} />
          <Route path='/main' component={Excursion} />
          <Route path='/airports' component={Airports} />
          <Route path='/business_Meeting' component={BusinessMeeting} />
          <Route path='/personal_driver' component={PersonalDriver} />
          <Route path='/corporate_taxi' component={CorporateTaxi} />
          <Route path='/tour/:id' component={Develops} />
          <Route path='/carpark' component={Cars} />
        </Switch>
        <footer>
          <Footer />
          <div className="info">
            2010-2018 (c)Pegasus Luxury Services Ltd. Company Number: 08104782. PCC-Operator Licence: 0086810101. All rights reserved.
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}





export default App;
