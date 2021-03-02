import styled from 'styled-components'

export const StepsContainer = styled.div`
    padding: 100px 0;
    background-color: #ffffff;

    @media screen and (max-width: 996px) {
        padding-top: 200px;
    }
`

export const StepsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-around;
`

export const StepsHeader = styled.h3`
    color: var(--clr-dark-blue);
    font-size: 1.8rem;
    line-height: 1.5;
    font-family: 'font-bold';
    margin-left: 50px;
    letter-spacing: 1px;

    @media screen and (max-width: 996px) {
        text-align: center;
        margin: 0;
        font-size: 1.5rem;
    }
`

export const StepsContent = styled.div`
    padding: 50px 0;

    @media screen and (max-width: 996px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`