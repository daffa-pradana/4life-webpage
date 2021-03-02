import React from 'react'

import './PerksPoint.css'

const PerksPoint = ({ id, icon, header, text }) => {
    return (
        <div className='point-container'>
            <img
                className='point-icon' 
                src={icon}
                alt="points"
            />
            <h4 className='point-header'>{header}</h4>
            <p className='point-text'>{text}</p>
        </div>
    )
}

export default PerksPoint
