import Link from 'next/link'
import React from 'react'
import { FaCartShopping } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div className='bg-slate-100 py-4 shadow-md mt-2'>

            <div className='flex justify-around items-center text-2xl'>
                <h1>Skysales</h1>
                <ul className='flex gap-8'>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/contact">Contact us</Link>
                </ul>
                <div className='flex gap-5'>

                <Link href="/login" className='px-4 py-1 bg-yellow-400 rounded-md'>Login</Link>
                <Link href="/cart"><FaCartShopping className='text-4xl'/></Link>
                </div>

            </div>
        </div>
    )
}

export default Navbar