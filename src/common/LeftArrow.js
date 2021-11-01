import Icon from '@mdi/react'
import { mdiChevronLeft } from '@mdi/js';


function LeftArrow({ prevSlide }){

    return(
            <button onClick={prevSlide} className='leftArrow'>  <Icon path={mdiChevronLeft}
             
             size={2}
             horizontal
             vertical
             rotate={180}
             
           /> </button>
    )

}

export default LeftArrow;
