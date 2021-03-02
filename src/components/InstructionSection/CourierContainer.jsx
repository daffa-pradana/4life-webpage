import React from 'react'

// images
import grabLogo from '../../images/logo/courier/grab.svg'
import gojekLogo from '../../images/logo/courier/gojek.svg'
import jneLogo from '../../images/logo/courier/jne.svg'
import tikiLogo from '../../images/logo/courier/tiki.svg'
import flLogo from '../../images/logo/courier/fl.svg'
import posLogo from '../../images/logo/courier/pos-indonesia.svg'

// styles
import './CourierContainer.css'

const CourierContainer = () => {
    return (
        <div className='courier-container'>
            <div className='courier-wrapper'>
                <img className='logo-wide' src={gojekLogo} alt="gojek"/>
                <img className='logo-wide' src={grabLogo} alt="grab"/>
                <img className='logo-wide' src={jneLogo} alt="jne"/>
                <img className='logo-wide' src={tikiLogo} alt="tiki"/>
                <img className='logo-wide' src={flLogo} alt="fl"/>
                <img className='logo-tall' src={posLogo} alt="pos-indonesia"/>
            </div>
        </div>
    )
}

export default CourierContainer
