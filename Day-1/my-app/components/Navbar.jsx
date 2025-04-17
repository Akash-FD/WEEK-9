"use client"

import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { myContext } from './Context';

const Navbar = () => {
    const [checkUser, setCheckUser] = useState(true)
    const { cart, setCart } = useContext(myContext)

    useEffect(() => {
        const user = localStorage.getItem("user")
        if (user) {
            setCheckUser(false)
        } else {
            setCheckUser(true)
        }

    }, [checkUser])

    const handleLogout = () => {
        localStorage.removeItem("user")
    }

    return (
        <div className=' bg-white py-4 shadow-md sticky top-0 z-10 mt-2'>

            <div className='flex justify-around items-center text-2xl'>
                <h1 className='font-bold text-4xl text-gray-600'>Sky<span className='text-xl'>sales</span></h1>
                <ul className='flex gap-8 text-gray-600'>
                    <Link href="/product">Shop</Link>
                    <Link href="/men">Mens</Link>
                    <Link href="/women">Women</Link>
                    <Link href="/kids">Kids</Link>
                </ul>
                <div className='flex gap-5 items-center'>
                    {checkUser ? <Link href="/login" className='px-4 py-1 bg-yellow-400 rounded-md'>Login</Link> : <Link href="/login" onClick={handleLogout} className='px-4 py-1 bg-yellow-400 rounded-md'>Logout</Link>}
                    <div className='relative'>
                        <span className='bg-red-500 rounded-full text-sm px-1 absolute left-5 bottom-6 text-white'>{cart.length}</span>
                        <Link href="/cart"><FaCartShopping className='text-4xl' /></Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar