import React from 'react'

import './CTAButton.css'
import whatsapp from '../../images/icons/social/whatsapp.svg'

const CTAButton = ({ link, text, mTop }) => {
    return (
        <a
            style={
                mTop ? {marginTop:mTop} : {}
            }
            className="cta-button"
            href={link}
            target="_blank"
            rel="noreferrer"
        >
            <span>{text}</span>
            <img src={whatsapp} alt="whatsapp"/>
        </a>
    )
}

export default CTAButton
