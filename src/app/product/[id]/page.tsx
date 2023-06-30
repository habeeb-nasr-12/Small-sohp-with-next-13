import ProductImage from '@/components/ProductImage';
import {notFound} from "next/navigation"
import React from 'react'
type props = {
  params: {
    id: string;
  }
}
const ProductId = async ({ params: { id } }: props) => {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`)
    const product: Product = await res.json()
    return (
      <div className='max-w-5xl mx-auto flex flex-col item-centet md:flex-row gap-8 mt-48 px-4 pb-10  '>
        <ProductImage product={product} />
        <div className='divide-y'>
          <div className='space-y-2 pb-8 '>
            <h1 className='font-bold text-2xl  md:text-4xl'>{product.title}</h1>
            <h2 className='font-bold text-gray-500  text-xl md:text-3xl'>${product.price}</h2>
          </div>
        </div>
        <div className='pt-8'>
          <p className='text-xs md:text-sm'>{product.description}</p>
        </div>
      </div>
    )
  } catch (error) {
     
    notFound()
  }

}

export default ProductId
