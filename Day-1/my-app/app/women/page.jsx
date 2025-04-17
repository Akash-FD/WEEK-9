import ProductDisplay from '@/components/ProductDisplay'
import React from 'react'

const women = () => {
  return (
    <div>
      <ProductDisplay category="women" heading="Welcom to Women Section" banner="/assets/banner_women.png" />
    </div>
  )
}

export default women

export const metadata = {
  title: 'Women were',
  description: 'this is a mens section.',
};
