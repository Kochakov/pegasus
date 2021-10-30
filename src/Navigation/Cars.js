import { Link } from "react-router-dom"
import "./Cars.css"


function Cars() {

    return (
        <div>
            <div className="main">
                <Link to="/main" className="link">ГЛАВНАЯ</Link>
                <div className="razdel">|</div>
                <Link to="/carpark" className="linkActive">АВТОПАРК</Link>
            </div>
            <hr></hr>
            <p className="tour">АВТОПАРК</p>
            <p className="carDesc">
            В автопарке нашей компании 8 шикарных моделей автомобилей от 4 солидных компаний. Мы выбрали для вас самое лучшее и готовы предоставить <br/> сервис высшего класса. Мы тщательно следим за тем, чтобы каждый автомобиль поддерживался в идеальном состоянии. Наша миссия: обеспечить вам <br/> роскошный отдых, а также комфорт во время деловых поездок.
            </p>
            <div>
                <div>

                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
                <div>
                    
                </div>
            </div>


        </div>
    )



}

export default Cars