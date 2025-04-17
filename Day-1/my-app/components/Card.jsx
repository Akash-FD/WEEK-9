"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'
import { myContext } from './Context'


const Card = (props) => {

    const {cart,setCart} = useContext(myContext)
    console.log(cart);
    

    const AddToCart=(props)=>{
        if (!cart.includes(props)) {
            
            setCart([...cart,props])
        }else{
            alert("already in cart")
        }

    }
    
    
    return (
        <div className='flex flex-col hover:scale-105 transition-all duration-200 my-2'>
        <Link href={`/product/${props.id}`} className='card w-[280px] max-lg:w-[200px] max-md:w-[140px] drop-shadow-xl my-1'>
            <Image src={props.img} alt="" className='object-contain hover:saturate-[1.3]' />
            <p className='my-2 max-lg:text-sm'>{props.name}</p>
            <div className='flex justify-items-start items-center gap-4 '>
                <p className='line-through text-red-500'>${props.old_price}</p>
                <p>${props.new_price}</p>
            </div>
        </Link>
            <button className='bg-red-600 w-32 px-3 py-1 text-sm rounded text-white my-2' onClick={()=>AddToCart(props)}>Add to Cart</button>
        </div>
    )
}

export default Card