import React from 'react'
import Fade from 'react-reveal'
import {
    PerksContainer,
    PerksWrapper,
    PerksHeader,
    PerksContent,
    ContentLeft,
    ContentCenter,
    ContentRight
} from './PerksElements'
import PerksPoint from './PerksPoint'
// images
import perksMain from '../../images/illustrations/perks.png'
// icons
import communityImg from '../../images/icons/perks/community.svg'
import globeImg from '../../images/icons/perks/globe.svg'
import immunityImg from '../../images/icons/perks/immunity.svg'
import microscopeImg from '../../images/icons/perks/microscope.svg'
import moneyImg from '../../images/icons/perks/money.svg'
import natureImg from '../../images/icons/perks/nature.svg'
// data
import perks_data from './perks-data'

const PerksSection = () => {
    
    return (
        <>
            <PerksContainer>
                <PerksWrapper>
                    {/* Header */}
                    <PerksHeader>
                        Keuntungan Produk
                    </PerksHeader>
                    
                    {/* Content */}
                    <PerksContent>
                        <ContentLeft>
                            <Fade right>
                            <PerksPoint
                                id={perks_data[0].id}
                                icon={immunityImg}
                                header={perks_data[0].header}
                                text={perks_data[0].text}
                            />
                            <PerksPoint
                                id={perks_data[1].id}
                                icon={globeImg}
                                header={perks_data[1].header}
                                text={perks_data[1].text}
                            />
                            <PerksPoint
                                id={perks_data[2].id}
                                icon={microscopeImg}
                                header={perks_data[2].header}
                                text={perks_data[2].text}
                            />
                            </Fade>
                        </ContentLeft>
                        <ContentCenter>
                            <Fade> 
                            <img
                                style={{
                                    width: '320px'
                                }} 
                                src={perksMain}
                                alt="product-main"
                            />
                            </Fade>
                        </ContentCenter>
                        <ContentRight>
                            <Fade left>
                            <PerksPoint
                                id={perks_data[3].id}
                                icon={natureImg}
                                header={perks_data[3].header}
                                text={perks_data[3].text}
                            />
                            <PerksPoint
                                id={perks_data[4].id}
                                icon={moneyImg}
                                header={perks_data[4].header}
                                text={perks_data[4].text}
                            />
                            <PerksPoint
                                id={perks_data[5].id}
                                icon={communityImg}
                                header={perks_data[5].header}
                                text={perks_data[5].text}
                            />
                            </Fade>
                        </ContentRight>
                    </PerksContent>

                </PerksWrapper>
            </PerksContainer>  
        </>
    )
}

export default PerksSection
