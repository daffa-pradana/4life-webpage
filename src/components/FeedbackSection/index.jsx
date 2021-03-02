import React from 'react'

// Elements
import {
    FeedbackContainer,
    FeedbackWrapper,
    FeedbackHeader,
    FeedbackSlider
} from './FeedbackElements'
import FeedbackContent from './FeedbackContent'

// Swipers
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// Data
import feedbacks from './feedback-data'

// Icons
import quotesUp from '../../images/icons/comments/quotes-up.svg'
import quotesDown from '../../images/icons/comments/quotes-down.svg'

// Style
import './FeedbackElements.css'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const FeedbackSection = () => {
    return (
        <>
            <FeedbackContainer>
                <FeedbackWrapper>
                    {/* Header */}
                    <FeedbackHeader>
                        Apa Kata Mereka ?
                    </FeedbackHeader>

                    {/* Slider */}
                    <FeedbackSlider>
                        <img
                            className='quotes-up' 
                            src={quotesUp}
                        />
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation
                            pagination={{clickable: true}}
                        >
                            {
                                feedbacks.map((feedback) => {
                                    return (
                                        <SwiperSlide 
                                            id={feedback.id}
                                            className='swiper-slides'
                                        >
                                            <FeedbackContent
                                                id={feedback.id}
                                                name={feedback.name}
                                                text={feedback.text}
                                            />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                        <img
                            className='quotes-down' 
                            src={quotesDown}
                        />
                    </FeedbackSlider>
                </FeedbackWrapper>
            </FeedbackContainer>  
        </>
    )
}

export default FeedbackSection
