"use client";

import Image from 'next/image';
import React, { useState } from 'react'

type props = {
    product: Product;
    fill?: boolean;

}

const ProductImage = ({ product, fill }: props) => {
    const [loading, setLoading] = useState<boolean>(true)
    if (fill) {
        return (<Image
            src={product.image}
            alt={product.title}
            fill
            className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
            ${loading? "scale-110 blur-2xl grayscale"
                : "scale-100 blur-0 grayscale-0"
                }}`}
            onLoadingComplete={() => setLoading(false)}
        />)

    }

    return (
        
            
            <Image
                src={product.image}
                alt={product.title}
                width={400}
                height={1000}
                className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${loading
                    ? "scale-110 blur-2xl grayscale"
                    : "scale-100 blur-0 grayscale-0"
                    }}`}
                onLoadingComplete={() => setLoading(false)}
            />
            
        
    )
}

export default ProductImage
