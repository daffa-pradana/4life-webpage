import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLinks
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks to='/' onClick={toggle}>
                        Home
                    </SidebarLinks>
                    <a 
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            textDecoration: 'none',
                            listStyle: 'none',
                            color: 'var(--clr-dark-blue)',
                            cursor: 'pointer'
                        }}
                        href="4life.com"
                        onClick={toggle}
                    >
                        Belanja
                    </a>
                    <SidebarLinks to='/member' onClick={toggle}>
                        Join Member
                    </SidebarLinks>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
