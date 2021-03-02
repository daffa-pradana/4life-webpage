import styled, { css } from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

import logo from './../../images/logo/logo.svg'

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    background-color: ${ props => 
        props.scroll > 1 ?
        '#ffffff' : 'var(--clr-light-grey)'
    };

    ${ props => props.scroll > 1 && css`
        -webkit-box-shadow: 3px 13px 55px -18px rgba(0,0,0,0.26);
        -moz-box-shadow: 3px 13px 55px -18px rgba(0,0,0,0.26);
        box-shadow: 3px 13px 55px -18px rgba(0,0,0,0.26);
    `}

    @media screen and (max-width: 960px) {
        transition: 0.8 all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`
export const NavLogo = styled(LinkRouter)`
    color: var(--clr-dark-blue);
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
`
export const Logo = styled.div`
    width: 60px;
    height: 40px;
    background-image: url(${logo});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: var(--clr-dark-blue);
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;

    ${ props => props.scroll > 1 && css`
        &:hover {
            border-bottom: 3px solid var(--clr-dark-blue)
        }
    `}
`

export const NavLinks = styled(LinkRouter)`
    color: var(--clr-dark-blue);
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active {
        border-bottom: 3px solid var(--clr-light-yellow);
    }
`