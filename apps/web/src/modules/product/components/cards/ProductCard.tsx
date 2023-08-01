import { Product } from '@/services/graphql';
import { Image } from 'antd';
import React from 'react'

export type ProductCardProps = {
  item?: Product
}

const ProductCard = ({item}: ProductCardProps) => {
  if(!item) return (<div>Product not found</div>)
  return (
    <div className="shadow-2 group relative flex cursor-pointer flex-col rounded-2xl border bg-white p-2 hover:border-gray-500">
      <div>
        <Image
          src={
            item.image ||
            'https://img.freepik.com/free-photo/vivid-blurred-colorful-background_58702-2655.jpg?w=2000'
          }
          alt="product image"
        />
      </div>
      <div>{item.name}</div>
      <button className="button mt-auto">
        Add to Basket
      </button>
    </div>
  );
}

export default ProductCard