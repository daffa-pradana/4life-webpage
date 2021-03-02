import React from 'react'

import './FeedbackContent.css'

const FeedbackContent = ({ id, name, text }) => {
    return (
        <div className='feedback-content'>
            <p>{text}</p>
            <h4>- {name}</h4>
        </div>
    )
}

export default FeedbackContent
