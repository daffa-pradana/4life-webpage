import styled from 'styled-components'

export const PerksContainer = styled.div`
    color: var(--clr-dark-blue);
    background-color: #ffffff;
    padding: 100px 0;

    @media screen and (max-width: 768px) {
        padding: 50px 0;
    }
`

export const PerksWrapper = styled.div`
    height: 800px;
    margin-left: auto;
    margin-right: auto;
    justify-items: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;

    @media screen and (max-width: 768px) {
        height: 900px; 
    }
`

export const PerksHeader = styled.h3`
    text-align: center;
    font-family: 'font-bold';
    letter-spacing: 1px;
    font-size: 1.8rem;
    color: var(--clr-dark-blue);

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        width: 70%;
        line-height: 1.8;
    }
`

export const PerksContent = styled.div`
    width: 80%;
    margin-top: 130px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (max-width: 480px) {
        width: 95%;
        margin-top: 80px;
    }
`

export const ContentLeft = styled.div`
    height: 500px;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 900px) {
        height: 600px;
    }

    @media screen and (max-width: 768px) {
        width: 40%;
    }

    @media screen and (max-width: 480px) {
        width: 45%;
        height: 650px;
    }
`
export const ContentCenter = styled.div`
    height: 500px;
    width: 35%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const ContentRight = styled.div`
    height: 500px;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 900px) {
        height: 600px;
    }

    @media screen and (max-width: 768px) {
        width: 40%;
    }

    @media screen and (max-width: 480px) {
        width: 45%;
        height: 650px;
    }
`