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
import CTAButton from '../CTAButton'
import imgProduct from "../../images/backgrounds/hero-product.png";

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
            <CTAButton
              text="Beli Produk Sekarang"
              link="https://api.whatsapp.com/send?phone=6287884812997&text=Halo%20Saya%20tertarik%20untuk%20membeli%20produk%20ini%20segera."
            />
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
