import styled from 'styled-components'

export const MembershipContainer = styled.div`
    background-color: var(--clr-light-grey);
    padding-top: 100px;
    padding-bottom: 300px;

    @media screen and (max-width: 480px) {
        padding-bottom: 200px;
        padding-top: 50px;
    }
`

export const MembershipWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-around;

    @media screen and (max-width: 996px) {
        flex-direction: column;
        align-items: center;
    }
`

export const MembershipDesc = styled.div`
    width: 38%;
    padding-top: 30px;
    padding-left: 30px;

    @media screen and (max-width: 996px) {
        width: 80%;
    }

    @media screen and (max-width: 630px) {
        padding-left: 0;
    }
`

export const MembershipCards = styled.div`
    width: 58%;
    
    @media screen and (max-width: 996px) {
        width: 600px;
        margin-top: 50px;
    }

    @media screen and (max-width: 630px) {
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: auto;
        margin-right: auto;
        justify-content: center;
    }
`

export const DescHeader = styled.h3`
    font-size: 1.8rem;
    color: var(--clr-dark-blue);
    line-height: 1.5;
    font-family: 'font-bold';
    letter-spacing: 1px;

    @media screen and (max-width: 996px) {
        text-align: center;
        font-size: 1.5rem;
    }
`

export const DescText = styled.p`
    margin-top: 25px;
    font-size: 16px;
    font-family: 'font-regular';
    line-height: 1.8;
    color: var(--clr-dark-grey); 
    letter-spacing: 1px;

    @media screen and (max-width: 996px) {
        text-align: center;
        font-size: 14px;
    }

    @media screen and (max-width: 630px) {
        font-size: 12px;
    }
`