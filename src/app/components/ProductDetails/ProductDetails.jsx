"use client"

import { urlFor } from '@/sanity/lib/image'
import Image from 'next/image'
import React, { useContext, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { CartContext } from '../../../context/CartContext';
import './styles.scss';

const ProductDetails = ({product}) => {
    const [index,setIndex] = useState(0);
    const { cartItems, addProduct, qty, decQty, incQty} = useContext(CartContext);
    
  return (
    <div className='product-details-section'>
        <div className='product-details-container'>

    	    {/* Left */}
            <div>
                {/* TOP */}
                <div className='first-img-cover'>
                    <Image
                        // loader={()=>urlFor(product.images[index]).url()}
                        loader={({ width }) => urlFor(product.images[index]).width(width).url()}
                        src={urlFor(product.images[index]).url()}
                        alt={product.images[index]}
                        width={350}
                        height={350}
                        className='object-cover mx-auto'
                    />
                </div>

                {/* BOTTOM */}
                <div className='small-images-container'>
                    {product.images?.map((item,i)=>(
                        <Image
                            // loader={()=>urlFor(product.images[i]).url()}
                            // loader={({ width }) => urlFor(product.images[i]).width(width).url()}
                            loader={({ width }) => urlFor(item).width(width).url()}
                            src={urlFor(product.images[i]).url()}
                            alt={product.images[0]}
                            width={220}
                            height={100}
                            className='img-displays'
                            onClick={()=>setIndex(i)}

                            key={i}
                        />
                    ))}

                </div>
            </div>


    	    {/* Right */}
            <div className='outer'>
                <div className='inner1'>
                    <div className='inner1Div1'>{product.name}</div>
                    <div className='inner1Div2'>{product.price}</div>
                </div>

                <div className='inner2'>
                        <h3>Quantity</h3>
                        <p className='quantity-desc inner2-p'>
                            <span className='minus'
                                onClick={decQty}
                            >
                                <AiOutlineMinus />
                            </span>
                            <span className='num'>{qty}</span>
                            <span className='plus' 
                                onClick={incQty}
                            >
                                <AiOutlinePlus />
                            </span>

                        </p>
                </div>

                <button className='btn add-to-cart'
                    onClick={()=>addProduct(product,qty)}
                >
                    Add To Cart
                </button>


            </div> 

        </div>
        
        
    </div>
  )
}

export default ProductDetails