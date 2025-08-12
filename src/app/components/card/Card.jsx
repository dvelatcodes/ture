import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import './styles.scss'

const Card = ({product}) => {

  return (
    <Link href={`/product/${product.slug.current}`} className='card-link'>
      <div className='card-cover'>
          <Image
              src={urlFor(product?.images && product.images[0]).url()}
              alt={product.slug}
              width={220}
              height={100}
              className=''
              priority={false}
          />
          <div className=''>
              <h1 className='card-a'>{product.name}</h1>
              <h1 className='card-b'>${product.price}</h1>
          </div>
      </div>
    </Link> 
  )
}

export default Card

// ${product.slug.current