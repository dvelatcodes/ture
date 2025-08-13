"use client"

import { useParams } from 'next/navigation'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
import React from 'react';
import { groq } from 'next-sanity';
import { client } from '@/sanity/lib/client';

const page = async () => {
    const { slug } = useParams();
    const products = await client.fetch(groq`*[_type=="product"]`);
    const product = products.find((product)=>product.slug.current == slug);

    // console.log(product);

    

  return (
    <>
        <ProductDetails product={product} />
    </>

  )
}

export default page