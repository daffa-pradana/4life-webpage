import React from 'react'

import './Steps.css'

const Steps = ({ id, header, text }) => {
    return (
        <div className='steps'>
            <div className='steps-number'>
                <span>{id}</span>
            </div>
            <h5 className='steps-header'>
                {header}
            </h5>
            <p className='steps-text'>
                {text}
            </p>
        </div>
    )
}

export default Steps
