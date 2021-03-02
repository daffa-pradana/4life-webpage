import styled from 'styled-components'

import imgBg from '../../images/backgrounds/session-bg.png'

export const SeparatorContainer = styled.div`
    position: relative;
    height: 250px;
    background-image: url(${imgBg});
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 996px) {
        height: 200px;
    }
`

export const SeparatorWrapper = styled.div`
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    position: relative;
`

export const ImageWrapper1 = styled.div`
    position: absolute;
    top: -150px;
    width: 100%;

    @media screen and (max-width: 996px) {
        top: -100px;
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
    }
`

export const ImageWrapper2 = styled.div`
    position: absolute;
    bottom: -150px;
    width: 100%;

    @media screen and (max-width: 996px) {
        bottom: -100px;
        display: flex;
        flex-direction: column;
        margin-left: auto;
        margin-right: auto;
        align-items: center;
    }
`