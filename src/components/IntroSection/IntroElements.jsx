import styled from 'styled-components'

export const IntroContainer = styled.div`
    background-color: var(--clr-light-grey);
    display: flex;
    justify-content: center;
    padding: 100px 0;
`

export const IntroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    justify-content: space-around;
    align-items: center;
`

export const IntroHeader = styled.h3`
    font-size: 1.8rem;
    color: var(--clr-dark-blue);
    font-family: 'font-bold';
    letter-spacing: 1px;
    text-align: center;
    line-height: 1.5;

    @media screen and (max-width: 768px) {
        font-size: 1.6rem;
        width: 70%;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.4rem;
        width: 90%;
    }
`

export const IntroText = styled.p`
    font-size: 14px;
    color: var(--clr-dark-grey);
    font-family: 'font-regular';
    line-height: 2;
    letter-spacing: 1px;
    width: 55%;
    text-align: center;
    margin-top: 30px;

    @media screen and (max-width: 768px) {
        font-size: 11px;
        width: 70%;
    }
`
