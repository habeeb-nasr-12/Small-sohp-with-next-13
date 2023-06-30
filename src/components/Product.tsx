import Link from 'next/link';
import React from 'react'
import ProductImage from './ProductImage';
type props = {
    product: Product;
}

const Product = ({ product }: props) => {
    return (
        <Link className='flex flex-col p-5 rounded group hover:scale-105 transition-transform ease-out duration-200' href={`product/${product.id}`} >
            <div  className='relative min-h-full  max-h-72  flex-1'>
                <ProductImage product={product} fill /> 
            </div>  
            <div className='font-semibold flex items-center justify-between  mt-4 mb-2  '>
                <p className='w-44 truncate'>{product.title}</p>
                <p>${product.price}</p>

            </div>

            <p className='w-64 line-clamp-3 text-xs text-gray-600'>{product.description}</p>
        </Link >
    )
}

export default Product
