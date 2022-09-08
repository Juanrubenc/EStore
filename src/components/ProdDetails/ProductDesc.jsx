import React from 'react'
import SimilarProducts from './SimilarProducts'

const ProductDesc = ({productInfo}) => {

    return (
        <div>
        <section>
            <img className='details__img' src={productInfo?.productImgs[1]} alt="Product Image from details" />
            <h2 className='product-desc-name'>{productInfo?.title}</h2>
            <div><b>Price</b> {productInfo?.price}</div>
            <p className='product-desc-info'>{productInfo?.description}</p>
        </section>
        </div> 
    )
}

export default ProductDesc