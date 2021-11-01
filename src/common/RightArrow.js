import Icon from '@mdi/react'
import { mdiChevronRight } from '@mdi/js';


function RightArrow({ nextSlide }){

    return(
            <button onClick={nextSlide} className='rightArrow'>  <Icon path={mdiChevronRight}
             
             size={2}
             horizontal
             vertical
             rotate={180}
             
           /> </button>
    )

}

export default RightArrow;
