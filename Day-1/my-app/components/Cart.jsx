"use client"


import React, { useContext } from 'react'
import { myContext } from './Context'
import Image from 'next/image'
import { redirect } from 'next/navigation'


const Cart = () => {

    const { cart, setCart } = useContext(myContext)
    const handleCancle = (item) => {
        const data = cart.filter((e) => e.id !== item.id)
        setCart(data)

    }

    return (
        <>

            <div className='w-full flex flex-col items-center justify-center text-center'>
                {cart.length !== 0 ?
                    cart.map((item, index) => {
                        return <div key={index} className='w-full flex items-center my-3'>
                            <p className='flex-[1]'>{index + 1}.</p>
                            <div className='flex-[1]'>

                                <Image src={item.img} alt="" className='w-16 hover:saturate-[1.3]' />
                            </div>
                            <p className='my-2 max-lg:text-sm flex-[1]'>{item.name}</p>

                            <p className='flex-[1]'>${item.new_price}</p>

                            <p onClick={() => handleCancle(item)} className='cursor-pointer text-3xl flex-[1]'>x</p>

                        </div>
                    })
                    :
                    <div className='flex flex-col gap-10 justify-end my-5'>
                        <p className='text-gray-400 text-center my-4 cursor-pointer text-4xl'>Cart is empty</p>
                        <button className='bg-yellow-400 px-3 py-1 rounded' onClick={() => redirect("/product")}>Back to home</button>
                    </div>}


            </div>
        </>
    )
}

export default Cart