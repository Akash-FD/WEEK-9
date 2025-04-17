
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
          <div className='flex items-center justify-center gap-10'>
            <div className='flex flex-col gap-5'>
              <Image src={item.image} alt="" width={100} />
              <Image src={item.image} alt="" width={100} />
              <Image src={item.image} alt="" width={100} />
              <Image src={item.image} alt="" width={100} />
            </div>

            <Image src={item.image} alt="" width={450} />
          </div>

          <div className='flex flex-col gap-5'>

            <h1 className='text-2xl font-bold'>{item.name}</h1>
            <p className='w-96'><strong>discription</strong>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus cum aliquid dolores! Minima tenetur hic, pariatur dicta perspiciatis aliquam consectetur, numquam quia unde exercitationem cumque necessitatibus. Ullam, quo asperiores?</p>
            <div className='flex  gap-10'>
              <p className='text-xl text-red-500 line-through'>$ {item.old_price}</p>
              <p className='text-xl '>$ {item.new_price}</p>
            </div>
            <button className='bg-red-500 hover:bg-red-600 px-3 w-44 rounded py-1 text-white font-semibold'>Add to Cart</button>
          </div>
        </div>
      })}

    </div>
  )
}

export default productDetails