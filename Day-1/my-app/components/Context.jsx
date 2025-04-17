"use client"

import React, { createContext, useState } from "react";

export const myContext = createContext()

export default function Context({ children }) {
    
    const [cart, setCart] = useState([])
    
    return (
        <myContext.Provider value={{cart, setCart}}>
            {children}
        </myContext.Provider>
    )
}
