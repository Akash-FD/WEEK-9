"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Login = () => {

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    useEffect(() => {
        const userData = async () => {
            const response = await fetch('https://dummyjson.com/users')
            const data = await response.json()
            setUser(data.users)
            console.log(data.users);

        }
        userData()
    }, [])

    const handleLogin = (e) => {
        e.preventDefault()
        const findUser = user.find((e) => e.email === email && e.password === password)

        if (findUser) {
            alert('Login successfully')
            localStorage.setItem('user', JSON.stringify(findUser))
            router.push("/product")
        } else {
            alert('Wrong username and password!!')
            router.push("/login")
            setEmail("")
            setPassword("")
        }

    }

    return (
        <>
            <div className='w-96 mt-10 border border-slate-200 shadow-lg p-5 text-center mx-auto'>
                <form action="" onSubmit={handleLogin} className='flex flex-col gap-5 m-auto p-5'>
                    <input type="email" name="" id="" placeholder='Enter your email' className='border px-2 py-1' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input type="text" name="" id="" placeholder='Enter your password' className='border px-2 py-1' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='bg-blue-600 text-white py-2 px-4'>Login</button>
                </form>
            </div>
        </>
    )
}

export default Login