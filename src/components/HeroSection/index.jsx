import React, { useState, useEffect } from "react";
import Fade from 'react-reveal/Fade'
import {
  HeroContainer,
  HeroBackground,
  HeroContent,
  HeroLeftContent,
  HeroRightContent,
  HeroHeader,
  HeroSubheader,
  HeroBtnWrapper,
} from "./HeroElements";
import imgBackground from "../../images/backgrounds/hero-bg.png";
import imgProduct from "../../images/backgrounds/hero-product.png";

import './HeroElements.css'

const HeroSection = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const checkWidth = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  });

  return (
    <HeroContainer id="home">
      {/* Background */}
      <HeroBackground>
        {width < 768 ? (
          ""
        ) : (
          <img
            style={{
              position: "absolute",
              right: "0",
              top: "0",
            }}
            src={imgBackground}
            alt="bg"
          />
        )}
      </HeroBackground>

      {/* Content */}
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
          <Fade bottom>
          <img
            style={
              width > 768
                ? {}
                : {
                    width: "200px",
                  }
            }
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
