import styled from 'styled-components'

export const InstructionContainer = styled.div`
    color: var(--clr-dark-blue);
    background-color: var(--clr-light-grey);
    padding-top: 100px;

    @media screen and (max-width: 480px) {
        padding-top: 70px;
    }
`

export const InstructionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 1000px;
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-evenly;
    align-items: center;

    @media screen and (max-width: 480px) {
        height: 500px;
    }
`

export const InstructionHeader = styled.h3`
    color: var(--clr-dark-blue);
    font-family: 'font-bold';
    letter-spacing: 1px;
    font-size: 1.8rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`