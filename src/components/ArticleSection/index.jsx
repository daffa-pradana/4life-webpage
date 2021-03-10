import React from 'react'
import { 
    ArticleContainer,
    ArticleWrapper,
    Article,
    ImageWrapper,
    TextWrapper,
    Heading,
    Paragraph
 } from './ArticleElements'
import Fade from 'react-reveal/Fade'

import articleImg1 from '../../images/images/article1.png'
import articleImg2 from '../../images/images/article2.png'

const ArticleSection = () => {
    return (
        <>
            <ArticleContainer id='articles'>
                <ArticleWrapper>
                    <Article arrange='left' order='1'>
                        <ImageWrapper>
                            <Fade left>
                            <img 
                                style={{
                                    width: '300px'
                                }}
                                src={articleImg1}
                                alt="article1"
                            />
                            </Fade>
                        </ImageWrapper>
                        <TextWrapper arrange='left'>
                            <Fade right>
                            <Heading>
                                Rahasia Menjaga Kesehatan
                                Jutaan Orang
                            </Heading>
                            <Paragraph>
                                Masa depan kita tergantung dengan apa yang kita
                                lakukan saat ini. dengan berbagai ancaman kesehatan
                                di dunia saat ini, tubuh kita dituntut untuk selalu
                                prima dan daya tahan tubuh adalah kunci utamanya.
                            </Paragraph>
                            </Fade>
                        </TextWrapper>
                    </Article>
                    <Article arrange='right' order='2'>
                        <ImageWrapper>
                            <Fade right>
                            <img 
                                style={{
                                    width: '300px'
                                }}
                                src={articleImg2}
                                alt="article2"
                            />
                            </Fade>
                        </ImageWrapper>
                        <TextWrapper arrange='right'>
                            <Fade left>
                            <Heading>
                                Makanan Harian Saja
                                Tidak Cukup!
                            </Heading>
                            <Paragraph>
                                Agar daya tahan tubuh optimal, asupan gizi dari makanan
                                jarian saja tidak cukup. Kita perlu suplemen yang cerdas
                                dan unik yang dapat mengedukasi sel imun, sehingga sel
                                imun kita mampu <b>MENGENALI, MERANGSANG</b> dan <b>MENGINGAT</b> ancaman - ancaman kesehatan di kemudian
                                hari.
                            </Paragraph>
                            </Fade>
                        </TextWrapper>
                    </Article>
                </ArticleWrapper>
            </ArticleContainer>
        </>
    )
}

export default ArticleSection
