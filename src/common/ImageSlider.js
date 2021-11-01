import React, { useState } from "react";
import { SliderData } from "./SliderData";
import Icon from '@mdi/react'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js';
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";


const ImageSlider = ({ slides }) => {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    console.log(current)

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className="slider">
            <LeftArrow prevSlide={prevSlide}/>
            <RightArrow nextSlide={nextSlide}/>
            
            {SliderData.map((slide, index) => {
                return (
                    <div>
                        <div className={index === current ? 'slide active' : 'slide'} key={index}>
                            {index === current && (<img src={slide.image} alt="pegasus image" className='image' />)}
                        </div>
                        <div className={index === current ? 'description active' : 'description'} key={index}>
                            <div className={index === current ? 'delay active' : 'delay'} key={index}>
                                {index === current && (<div dangerouslySetInnerHTML={{ __html: slide.desc }} className="slideDesc" />)}
                            </div>
                            <div className={index === current ? 'delay active' : 'delay'} key={index}>
                                {index === current && (<div dangerouslySetInnerHTML={{ __html: slide.title }} className="slideTitle" />)}
                            </div>
                            <div className={index === current ? 'delay active' : 'delay'} key={index}>
                                {index === current && (<div dangerouslySetInnerHTML={{ __html: slide.info }} className="slideInfo" />)}
                            </div>
                        </div>



                    </div>
                )
            })}

        </div>
    )
}

export default ImageSlider