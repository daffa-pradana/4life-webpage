import React from "react";
import Fade from 'react-reveal/Fade'
import {
  HeroContainer,
  HeroContent,
  HeroLeftContent,
  HeroRightContent,
  HeroHeader,
  HeroSubheader,
  HeroBtnWrapper,
} from "./HeroElements";
import imgProduct from "../../images/backgrounds/hero-product.png";

import './HeroElements.css'

const HeroSection = () => {

  return (
    <HeroContainer id="home">
      <HeroContent>
        <HeroLeftContent>
          <Fade>
          <HeroHeader>Optimalkan Imunitas Anda dan Keluarga</HeroHeader>
          <HeroSubheader>
            Beli Produk Kesehatan Luar Biasa Dari 4Life dan rasakan Rasakan
            Manfaatnya!
          </HeroSubheader>
          <HeroBtnWrapper>
            <a
              className='hero-btn'
              href="https://api.whatsapp.com/send?phone=6287884812997&text=Hallo%20Saya%20tertarik%20untuk%20membeli%20produk%20ini%20segera."
              target="_blank"
              rel="noreferrer"
            >
              Beli Produk
            </a>
          </HeroBtnWrapper>
          </Fade>
        </HeroLeftContent>
        <HeroRightContent>
          <Fade>
          <img
            style={{width: '100%'}}
            src={imgProduct}
            alt="product"
          />
          </Fade>
        </HeroRightContent>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
