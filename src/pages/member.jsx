import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import IntroSection from '../components/IntroSection'
import MembershipSection from '../components/MembershipSection'
import SeparatorSection from '../components/SeparatorSection'
import StepsSection from '../components/StepsSection'

import Footer from '../components/Footer'
import FeeSection from '../components/FeeSection'

const MemberPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar 
                isOpen={isOpen}
                toggle={toggle}
            />
            <Navbar
                toggle={toggle}
            />
            <IntroSection />
            <MembershipSection />
            <SeparatorSection />
            <StepsSection />
            <FeeSection />
            <Footer />
        </>
    )
}

export default MemberPage
