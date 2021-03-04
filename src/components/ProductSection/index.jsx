import React, { useState, useEffect } from 'react'

// Swipers
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// Elements
import { 
    ProductContainer,
    ProductWrapper,
    ProductHeader,
    ProductSlider,
    ProductDescription
} from './ProductElements'
import CardSingles from './CardSingles'
import CardBoxes from './CardBoxes'
import CardPacks from './CardPacks'
import SwipeGestures from './SwipeGestures'

// Data
import products from './products-data'
import CTAButton from '../CTAButton';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const ProductSection = () => {
    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }

    return (
        <>
            <ProductContainer>
                <ProductWrapper>
                    {/* Header */}
                    <ProductHeader>
                        Produk Kami
                    </ProductHeader>

                    {/* Slider */}
                    <ProductSlider>
                        <Swiper
                            breakpoints={{
                                640: {
                                    width: 640,
                                    slidesPerView: 2,
                                },
                                992: {
                                    width: 992,
                                    slidesPerView: 3,
                                }
                            }}
                            mousewheel={true}
                            spaceBetween={30}
                            slidesPerView={1}
                        >
                        {
                            products.map((product) => {
                                return (
                                    <SwiperSlide
                                        style={{
                                            paddingBottom: '50px',
                                            paddingTop: '30px',
                                            paddingLeft: '50px',
                                        }} 
                                        id ={product.id}>
                                        {product.package == 'singles' && <CardSingles product={product}/>}
                                        {product.package == 'boxes' && <CardBoxes product={product}/>}
                                        {product.package == 'packs' && <CardPacks product={product}/>}
                                    </SwiperSlide>
                                )
                            })
                        }
                        </Swiper>
                        <SwipeGestures />
                    </ProductSlider>

                    {/* Description */}
                    <ProductDescription>
                        Produk 4Life membantu meregenerasi dan memperbaiki sel-sel yang rusak, sehingga
                        mempercepat proses penyembuhan, membuat tubuh kuat dan menjaga kita awet muda.
                        Produk Kami dapat diminum kapanpun dimanapun.
                    </ProductDescription>

                    {/* CTA Button */}
                    <CTAButton
                        text="Beli Produk Sekarang"
                        link="https://api.whatsapp.com/send?phone=6287884812997&text=Halo%20Saya%20tertarik%20untuk%20membeli%20produk%20ini%20segera."
                    />
                </ProductWrapper>
            </ProductContainer>
        </>
    )
}

export default ProductSection
