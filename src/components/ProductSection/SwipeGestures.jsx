import React from 'react'

import swipeIcon from '../../images/icons/gestures/swipe-right.svg'
import './SwipeGestures.css'

const SwipeGestures = () => {
    return (
        <div className='gesture-container'>
            <div className="gesture-wrapper">
                <img
                    className='gesture-icon'
                    src={swipeIcon}
                    alt="swipe"
                />
                <p className='gesture-text'>geser untuk melihat</p>
            </div>
        </div>
    )
}

export default SwipeGestures
