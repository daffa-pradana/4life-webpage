import styled from 'styled-components'

export const ProductContainer = styled.div`
    padding: 100px 0;
    background-color: #ffffff;
    
    @media screen and (max-width: 768px) {
        /* work on this later */
    }
`

export const ProductWrapper = styled.div`
    height: 1000px;
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        height: 700px;
    }
`

export const ProductHeader = styled.h3`
    text-align: center;
    font-family: 'font-bold';
    letter-spacing: 1px;
    font-size: 1.8rem;
    color: var(--clr-dark-blue);

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const ProductSlider = styled.div`
    width: 90%;
`

export const ProductDescription = styled.p`
    width: 60%;
    text-align: center;
    line-height: 2;
    font-family: 'font-regular';
    color: var(--clr-dark-grey);
    font-size: 16px;

    @media screen and (max-width: 768px) {
        width: 80%;
        font-size: 14px;
        margin-top: 20px;
    }

    @media screen and (max-width: 460px) {
        width: 80%;
        font-size: 11px;
        margin-top: 30px;
    }
`