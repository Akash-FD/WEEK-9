// "use client"

import React from 'react'
// import { AllProducts } from '../page'


const productDetails = ({params}) => { 
    // const { id } = await params

    // const selectedProduct = AllProducts.find((item) => item.id === Number(id))
    
  return (
 
  
    // <div>productDetails :{selectedProduct.id} </div>

    <div>productDetails :{params.id} </div>
    
  )
}

export default productDetails