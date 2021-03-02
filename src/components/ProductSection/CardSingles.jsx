import React from 'react'

// style
import './CardSingles.css'

// card backgrounds
import tfCard from '../../images/card-bg/card-bg-tf.svg'
import transformCard from '../../images/card-bg/card-bg-transform.svg'
import shaperiteCard from '../../images/card-bg/card-bg-shaperite.svg'
import wellnessCard from '../../images/card-bg/card-bg-wellness.svg'

const CardSingles = ({ product }) => {
    
    // set background
    let bgCard = '';
    switch(product.type) {
        case 'transfer-factor':
            bgCard = tfCard;
            break;
        case 'tf-targeted':
            bgCard = tfCard;
            break;
        case 'transform':
            bgCard = transformCard;
            break;
        case 'shaperite':
            bgCard = shaperiteCard;
            break;
        case 'wellness':
            bgCard = wellnessCard;
            break;
        default:
            bgCard = tfCard;
    }

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
            <div className='card-pricing'>
                <p>{product.price_desc_1} <br/> {product.price_desc_2}</p>
                <h4>{product.price_amnt_1} <br/> {product.price_amnt_2}</h4>
            </div>
        </div>
    )
}

export default CardSingles
