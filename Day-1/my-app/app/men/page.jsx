
import ProductDisplay from '@/components/ProductDisplay'
import React from 'react'
// import { Metadata } from 'next';

const men = () => {
  return (
    <div>
      <ProductDisplay category="men" heading="Welcom to Men Section" banner="/assets/banner_mens.png" />
    </div>
  )
}

export default men

export const metadata = {
  title: 'Mens were',
  description: 'this is a mens section.',
};