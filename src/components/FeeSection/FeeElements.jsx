import styled from 'styled-components'

export const FeeContainer = styled.div`
    padding: 150px 0;

    @media screen and (max-width: 996px) {
        padding-top: 20px;
    }
`

export const FeeWrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
    align-items: center; 
`

export const FeeBox = styled.div`
    width: 80%;
    border: 6px solid var(--clr-dark-blue);
    height: 300px;
    border-radius: 25px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 996px) {
        padding-top: 50px;
        border: 4px solid var(--clr-dark-blue);
    }

    @media screen and (max-width: 768px) {
        padding-top: 50px;
        width: 90%;
        border: 2px solid var(--clr-dark-blue);
    }

    @media screen and (max-width: 460px) {
        padding-top: 0px;
        height: 600px;
    }
`

export const BoxHeader = styled.h3`
    position: absolute;
    color: var(--clr-dark-blue);
    font-family: 'font-bold';
    font-size: 1.8rem;
    top: -20px;
    background-color: #ffffff;
    padding-left: 20px;
    padding-right: 20px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 450px;
    text-align: center;

    @media screen and (max-width: 996px) {
        font-size: 1.5rem;
        width: 280px;
        line-height: 1.8;
        top: -50px;
    }

    @media screen and (max-width: 768px) {
        font-size: 1rem;
        top: -20px;
        width: 200px;
    }
`

export const BoxWrapper = styled.div`
    width: 70%;
    height: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }

    @media screen and (max-width: 460px) {
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
`

export const BoxColumn = styled.div`
    height: 180px;
    width: 30%;

    @media screen and (max-width: 460px) {
        margin-top: 50px;
    }
`

export const SubHeader = styled.h5`
    font-size: 14px;
    color: var(--clr-dark-blue);
    letter-spacing: 1px;
    font-family: 'font-bold';

    @media screen and (max-width: 768px) {
        font-size: 12px;
        text-align: center;
    }
`

export const Lists = styled.ul`
`

export const City = styled.li`
    list-style: none;
    text-decoration: none;
    color: var(--clr-dark-grey);
    font-family: 'font-regular';
    font-size: 14px;
    margin-top: 10px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
        text-align: center;
    }
`