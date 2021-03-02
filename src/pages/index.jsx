import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ArticleSection from '../components/ArticleSection'
import ProductSection from '../components/ProductSection'
import PerksSection from '../components/PerksSection'
import InstructionSection from '../components/InstructionSection'
import FeedbackSection from '../components/FeedbackSection'
import Footer from '../components/Footer'

const Home = () => {
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
            <HeroSection />
            <ArticleSection />
            <ProductSection />
            <PerksSection />
            <InstructionSection />
            <FeedbackSection />
            <Footer />
        </>
    )
}

export default Home
