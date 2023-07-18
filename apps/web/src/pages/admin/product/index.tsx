import { useProductsQuery } from '@/services/graphql'
import React from 'react'

const AdminProductPage = () => {

  const [data, ] = useProductsQuery()

  console.log(data)

  return (
    <div>AdminProductsPage</div>
  )
}

export default AdminProductPage