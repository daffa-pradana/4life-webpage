import React from 'react'
import { 
    SeparatorContainer,
    SeparatorWrapper,
    SeparatorBg,
    ImageWrapper1,
    ImageWrapper2
} from './SeparatorElements'

// images
import imgBackground from '../../images/backgrounds/session-bg.png'
import img1 from '../../images/images/member1.png'
import img2 from '../../images/images/member2.png'

// style
import './SeparatorElements.css'

const SeparatorSection = () => {
    return (
        <>
            <SeparatorContainer>
                <SeparatorWrapper>
                    <ImageWrapper1>
                        <img className='img1' src={img1} alt=""/>
                    </ImageWrapper1>
                    <ImageWrapper2>
                        <img className='img2' src={img2} alt=""/>
                    </ImageWrapper2>                    
                </SeparatorWrapper>
            </SeparatorContainer>
        </>
    )
}

export default SeparatorSection
