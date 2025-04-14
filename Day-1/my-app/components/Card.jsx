import Image from 'next/image'
import React from 'react'

const Card = (props) => {
    return (
        <div className='card w-[280px] max-lg:w-[200px] max-md:w-[140px] drop-shadow-xl hover:scale-105 transition-all duration-200'>
            <Image src={props.img} alt="" className='object-contain' />
            <p className='my-2 max-lg:text-sm'>{props.name}</p>
            <div className='flex justify-items-start items-center gap-4 '>
                <p className='line-through text-red-500'>${props.old_price}</p>
                <p>${props.new_price}</p>
            </div>
        </div>
    )
}

export default Card