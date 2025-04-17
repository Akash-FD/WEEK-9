
// import { myContext } from '@/components/Context';
import all_product from '@/public/assets/all_product'
import Image from 'next/image';
import React from 'react'


const productDetails = async ({ params }) => {
  const { id } = await params

  const oneProduct = all_product.filter((item) => item.id === Number(id))

  // const {cart,setCart} = useContext(myContext)

  // const handleAddToCart =() => {
  //   setCart([...cart, oneProduct])

  // }

  return (
    <div>
      {oneProduct.map((item) => {
        return <div key={item.id} className='flex justify-center p-5 gap-5'>

          <Image src={item.image} alt="" />
          <div className='flex flex-col items-center justify-center gap-10'>

          <h1 className='text-2xl font-bold'>{item.name}</h1>
          <button className='bg-red-500 px-3 w-44 rounded py-1 text-white font-semibold'>Add to Cart</button>
          </div>
        </div>
      })}

    </div>
  )
}

export default productDetails