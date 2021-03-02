import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa'
import {
     Nav,
     NavbarContainer,
     NavLogo,
     Logo,
     MobileIcon,
     NavMenu,
     NavItem,
     NavLinks
    } from './NavbarElements'

const Navbar = ({ toggle }) => {

    const [scrolled, setScrolled] = useState(window.scrollY);
    const checkScroll = () => {
        setScrolled(window.scrollY)
    }
    useEffect(() => { 
        window.addEventListener('scroll', checkScroll)
        return () => {
            window.removeEventListener('scroll', checkScroll)
        }
    })

    return (
        <>
            <Nav scroll={scrolled}>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <Logo />
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem scroll={scrolled}>
                            <NavLinks to="/">Home</NavLinks>
                        </NavItem>
                        <NavItem scroll={scrolled}>
                            <a 
                                style={{
                                    color: "var(--clr-dark-blue)",
                                    display: "flex",
                                    alignItems: 'center',
                                    textDecoration: 'none',
                                    padding: '0 1rem',
                                    height: '100%',
                                    cursor: 'pointer'
                                }}
                                href="https://indonesia.4life.com/11277817/shop"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Belanja
                            </a>
                        </NavItem>
                        <NavItem scroll={scrolled}>
                            <NavLinks to="/member">Join Member</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
