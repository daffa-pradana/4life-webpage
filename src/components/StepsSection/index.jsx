import React from 'react'
import Fade from  'react-reveal'
import {
    StepsContainer,
    StepsHeader,
    StepsWrapper,
    StepsContent
} from './StepsElements'
import Steps from './Steps'
import steps from './steps_data'

const StepsSection = () => {
    return (
        <>
            <StepsContainer>
                <StepsWrapper>
                    <Fade bottom>
                    <StepsHeader>
                        Prosedur Pendaftaran
                        <br/> Member
                    </StepsHeader>
                    </Fade>
                    <Fade bottom>
                    <StepsContent>
                        
                        {
                            steps.map((step) => {
                                return(
                                    <Steps 
                                        id={step.id}
                                        header={step.header}
                                        text={step.text}
                                    />
                                )
                            })
                        }
                    </StepsContent>
                    </Fade>
                </StepsWrapper>
            </StepsContainer>
        </>
    )
}

export default StepsSection
