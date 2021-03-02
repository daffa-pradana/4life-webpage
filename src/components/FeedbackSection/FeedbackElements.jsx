import styled from 'styled-components'

export const FeedbackContainer = styled.div`
    color: var(--clr-dark-blue);
    background-color: #ffffff;
    padding: 100px 0;
`

export const FeedbackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 600px;
    width: 100%;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-around;
    align-items: center;
`

export const FeedbackHeader = styled.h3`
    color: var(--clr-dark-blue);
    font-family: 'font-bold';
    letter-spacing: 1px;
    font-size: 1.8rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`

export const FeedbackSlider = styled.div`
    width: 80%;
    position: relative;
`