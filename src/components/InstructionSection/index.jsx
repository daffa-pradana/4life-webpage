import React from 'react'
import {
    InstructionContainer,
    InstructionWrapper,
    InstructionHeader
} from './InstructionElement'
import CourierContainer from './CourierContainer'
import instructionImg from '../../images/illustrations/canvas.svg'

import './InstructionElement.css'

const InstructionSection = () => {
    return (
        <>
            <InstructionContainer id='instruction'>
                <InstructionWrapper>
                    <InstructionHeader>
                        Cara Pemesanan
                    </InstructionHeader>
                    <img
                        className='illustration'
                        src={instructionImg}
                        alt="instruction"
                    />
                </InstructionWrapper>
                <CourierContainer />
            </InstructionContainer>
        </>
    )
}

export default InstructionSection
