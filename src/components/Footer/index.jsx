import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterContent,
    FooterHeader,
    FooterText,
    FooterBottom,
    BottomColumn,
    Copyright,
    Socials
} from './FooterElements'

// Images
import bcaLogo from '../../images/logo/bank/bca.svg'
import mandiriLogo from '../../images/logo/bank/mandiri.svg'
import facebookLogo from '../../images/icons/social/facebook.svg'
import twitterLogo from '../../images/icons/social/twitter.svg'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    {/* Column 1 */}
                    <FooterContent>
                        <FooterHeader>
                            Kontak Order WhatsApp 4Life
                        </FooterHeader>
                        <FooterText>
                            untuk info pemesanan produk dan pendaftaran
                            member silahkan hubungi kami:
                            <br/>
                            <br/>
                            DISTRIBUTOR RESMI 4LIFE INDONESIA
                            <br/>
                            ID 4LIFE: 11277817
                            <br/>
                            Order via WhatsApp: 0878-8481-2997
                        </FooterText>
                    </FooterContent>
                    
                    {/* Column 2 */}
                    <FooterContent>
                        <FooterHeader>
                            Rekening Bank Order 4Life
                        </FooterHeader>
                        <br/>
                        <img
                            style={{
                                width: '70px'
                            }} 
                            src={bcaLogo}
                            alt="bca"
                        />
                        <FooterText>
                            No. Rek 6070 415 800
                            <br/>
                            a/n PT 4LIFE INDONESIA TRADING
                            <br/>
                            <br/>
                        </FooterText>
                        <img
                            style={{
                                width: '70px'
                            }} 
                            src={mandiriLogo}
                            alt="mandiri"
                        />
                        <FooterText>
                            No. Rek 070 000 631969
                            <br/>
                            a/n PT 4LIFE INDONESIA TRADING
                        </FooterText>
                    </FooterContent>
                    
                    {/* Column 3 */}
                    <FooterContent>
                        <FooterHeader>
                            Ongkir Order 4Life
                        </FooterHeader>
                        <FooterText>
                            Biaya pengiriman sesuai dengan kebijakan jasa
                            pengiriman:
                            <br/>
                            <br/>
                            Zona 1: Rp. 22.000,- <br/>
                            Zona 2: Rp. 33.000,- <br/>
                            Zona 3: Rp. 55.000,-
                        </FooterText>
                    </FooterContent>
                </FooterWrapper>
            </FooterContainer>
            <FooterBottom>
                <BottomColumn>
                    
                </BottomColumn>
                <BottomColumn>
                    <Copyright>
                        copyright ©2021 imunsehat.id
                    </Copyright>
                </BottomColumn>
                <BottomColumn>
                    <Socials>
                        <img
                            style={{
                                width: '20px',
                                marginRight: '20px',
                                cursor: 'pointer'
                            }} 
                            src={facebookLogo}
                            alt="facebook"
                        />
                        <img
                            style={{
                                width: '20px',
                                marginRight: '20px',
                                cursor: 'pointer'
                            }}  
                            src={twitterLogo}
                            alt="twitter"
                        />
                    </Socials>
                </BottomColumn>
            </FooterBottom>
        </>
    )
}

export default Footer
