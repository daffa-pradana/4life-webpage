import React from 'react'

// style
import './CardBoxes.css'

// card 
import riovidaCard from '../../images/card-bg/card-bg-riovida.svg'
import digestCard from '../../images/card-bg/card-bg-digest.svg'

const CardBoxes = ({ product }) => {
    
    // set background
    const bgCard = product.type == 'riovida' ? riovidaCard : digestCard 
    
    return (
        <div className='card-container'>
            <h3 className='card-header'>
                {product.header} <br/>
                {product.sub_header}
            </h3>
            <img
                className="card-product" 
                src={process.env.PUBLIC_URL + product.img}
                alt="product"
            />
            <img
                className="card-bg" 
                src={bgCard}
                alt="bg"
            />
            <div className="card-pricing">
                <p>
                    {product.price_desc_1} <br/>
                    {product.price_desc_2}
                </p>
                <h4>
                    {product.price_amnt_1} <br/>
                    {product.price_amnt_2}
                </h4>
            </div>
        </div>
    )
}

export default CardBoxes
