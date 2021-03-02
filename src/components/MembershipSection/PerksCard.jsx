import React from 'react'

import './PerksCard.css'

const PerksCard = ({ id, image, header, text }) => {
    return (
        <div className='perks-card'>
            <img src={image} alt='perks-point'/>
            <h5>{header}</h5>
            <p>{text}</p>
        </div>
    )
}

export default PerksCard
