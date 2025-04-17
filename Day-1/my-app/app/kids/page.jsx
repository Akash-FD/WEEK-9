import ProductDisplay from '@/components/ProductDisplay'
import React from 'react'
import { Metadata } from 'next'



const kids = () => {
  return (
    <div>
        <ProductDisplay category="kid" heading="Welcom to Kids Section" banner="/assets/banner_kids.png"/>
        
    </div>
  )
}

export default kids

export const metadata = {
    title: 'Kids were',
    description: 'this is a kids section.',
  };