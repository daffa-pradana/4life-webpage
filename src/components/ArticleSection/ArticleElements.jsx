import styled from 'styled-components'

export const ArticleContainer = styled.div`
    color: var(--clr-dark-blue);
    background-color: #ffffff;
    padding: 100px 0;

    @media screen and (max-width: 768px) {
    }
`

export const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 1350px;
    }
`
export const Article = styled.div`
    width: 75%;
    height: 400px;
    display: flex;
    margin-top: ${ props =>
        props.order == '1' ?
            '' : '50px'
    };

    flex-direction: ${ props =>
        props.arrange == 'left' ?
            'row' : 'row-reverse'
    };

    @media screen and (max-width: 1025px) {
        width: 90%;
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        height: 900px;
        margin-top: ${ props =>
        props.order == '1' ?
            '' : '100px'
        };
        align-items: center;
    }
`

export const ImageWrapper = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const TextWrapper = styled.div`
    ${ props => 
        props.arrange == 'left' ?
        'margin-left: 5%;'
        : 
        'margin-right: 5%;'
    }
    
    width: 55%;
    display: flex;
    flex-direction: column;
    padding-top: 55px;

    @media screen and (max-width: 768px) {
        width: 90%;
        margin-left: 0;
        margin-right: 0;
        align-items: center;
    }
`

export const Heading = styled.h3`
    color: var(--clr-dark-blue);
    font-family: 'font-bold';
    letter-spacing: 1px;
    font-size: 1.8rem;
    line-height: 1.5;
    width: 100%;
    @media screen and (max-width: 768px) {
        text-align: center;
        font-size: 1.5rem;
    }
`

export const Paragraph = styled.p`
    margin-top: 30px;
    color: var(--clr-dark-grey);
    font-family: 'font-regular';
    letter-spacing: 1px;
    font-size: 14px;
    line-height: 1.8;
    width: 100%;
    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`