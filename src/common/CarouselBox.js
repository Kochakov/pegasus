import React, {Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
import mainPageBusTrans1 from '../images/mainPageBusTrans.jpg'
import mainPageBusTrans2 from '../images/mainPageBusTrans2.jpg'

export default class CarouselBox extends Component {
    render() {
        return(
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100" 
                    src={mainPageBusTrans1}
                    alt="First"
                    />
                    <Carousel.Caption>
                        <h3>first</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100" 
                    src={mainPageBusTrans2}
                    alt="Second"
                    />
                    <Carousel.Caption>
                        <h3>Second</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}