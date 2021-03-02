import React from 'react'

// style
import './CardPacks.css'

// card backgrounds
import packsCard from '../../images/card-bg/card-bg-packs.svg'

const CardPacks = ({ product }) => {
    
    const bgCard = packsCard
    
    return (
        <div className='card-container'>
            <div className='card-header'>
                {product.header} <br/>
                {product.sub_header}
            </div>
            <img 
                className='card-product'
                src={process.env.PUBLIC_URL + product.img}
                alt="product"
            />
            <img 
                className='card-bg'
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

export default CardPacks
