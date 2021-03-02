import React from 'react'
import Fade from 'react-reveal'
import {
    IntroContainer,
    IntroWrapper,
    IntroHeader,
    IntroText
} from './IntroElements'

import './IntroElements.css'

const IntroSection = () => {
    return (
        <>
            <IntroContainer>
                <Fade>
                <IntroWrapper>
                    <IntroHeader>
                        Cara Menjadi Member 4Life
                    </IntroHeader>  
                    <IntroText>
                        Prosedur pendaftaran member 4Life Transfer Factor sangatlah mudah. Dalam Waktu 24 Jam
                        anda sudah mendapatkan ID member dan bisa masuk (Login) ke website resmi 4Life. Kartu
                        member akan disertakan kedalam paket pengiriman barang.
                    </IntroText>
                    <a
                        className='cta-btn'
                        href="https://api.whatsapp.com/send?phone=6287884812997&text=Halo%20Saya%20tertarik%20untuk%20menjadi%20member%204Life."
                        target="_blank"
                        rel="noreferrer"
                    >
                        Join Member
                    </a>   
                </IntroWrapper>
                </Fade>
            </IntroContainer>
        </>
    )
}

export default IntroSection
