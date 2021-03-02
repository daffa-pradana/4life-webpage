import styled from 'styled-components'

export const FooterContainer = styled.div`
    background-color: var(--clr-dark-blue);
    padding: 80px 0;
`

export const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const FooterContent = styled.div`
    width: 23%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1080px) {
        width: 30%;
    }

    @media screen and (max-width: 768px) {
        width: 50%;
        margin-top: 30px;
    }

    @media screen and (max-width: 480px) {
        width: 80%;
    }
`

export const FooterHeader = styled.h3`
    font-size: 15px;
    color: #ffffff; 
    font-family: 'font-bold';
    letter-spacing: 1px;
    padding-bottom: 10px;

` 

export const FooterText = styled.p`
    font-size: 10px;
    color: #ffffff;
    font-family: 'font-medium';
    letter-spacing: 1px;
    line-height: 2;
    margin-top: 5px;
`

export const FooterBottom = styled.div`
    width: 100%;
    background-color: var(--clr-light-grey);
    color: var(--clr-dark-grey);
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const BottomColumn = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 33%;
    }
`

export const Copyright = styled.p`
    color: var(--clr-dark-grey);
    font-family: 'font-medium';
    font-size: 12px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`

export const Socials = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
`
