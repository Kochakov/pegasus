import React from "react";
import './style.css';
import logo from './logo.png';
import Button from "./Button";

function App() {

 
  return (
    <div className="App">
      <header className="header">
          <div className="line">
            <div className="number">
              <p>+44 20 7719 8816</p>
              <p>круглосуточно</p>
            </div>
          
            <div className="number">
              <p>+44 777 100 7676</p>
              <p>viber & whatsup</p>
            </div>
          </div >
          <div>
            <img src={logo} alt="logo"/>
          </div>
          <div className="line">
            <button> узнать тариф </button>
            <button>  сделать заказ </button>
          </div>
      </header>
    </div>
  );
}

function  clickMe(){
  
}




export default App;
