import React from 'react'
import Fade from 'react-reveal'
import {
    MembershipContainer,
    MembershipWrapper,
    MembershipDesc,
    MembershipCards,
    DescHeader,
    DescText
} from './MembershipElements'
import PerksCard from './PerksCard'

// data
import perks from './membership-perks'

// icons
import moneyIcon from '../../images/icons/member/money.svg'
import cardIcon from '../../images/icons/member/vip.svg'
import poinIcon from '../../images/icons/member/medal.svg'
import famousIcon from '../../images/icons/member/famous.svg'

const MembershipSection = () => {
    return (
        <>
            <MembershipContainer>
                <Fade bottom>
                <MembershipWrapper>
                    <MembershipDesc>
                        <DescHeader>
                            Manfaat Menjadi
                            <br/> Member ?
                        </DescHeader>
                        <DescText>
                            Mendaftar menjadi member adalah <br/>
                            cara paling bijak, karena anda akan <br/>
                            mendapatkan beberapa manfaat <br/>
                            berikut.
                        </DescText>
                    </MembershipDesc>
                    <MembershipCards>
                        <PerksCard
                            id={perks[0].id}
                            image={moneyIcon}
                            header={perks[0].header}
                            text={perks[0].text}
                        />
                        <PerksCard
                            id={perks[1].id}
                            image={cardIcon}
                            header={perks[1].header}
                            text={perks[1].text}
                        />
                        <PerksCard
                            id={perks[2].id}
                            image={poinIcon}
                            header={perks[2].header}
                            text={perks[2].text}
                        />
                        <PerksCard
                            id={perks[3].id}
                            image={famousIcon}
                            header={perks[3].header}
                            text={perks[3].text}
                        />
                    </MembershipCards>
                </MembershipWrapper>
                </Fade>
            </MembershipContainer>
        </>
    )
}

export default MembershipSection
