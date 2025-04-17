import Link from 'next/link'
import React from 'react'

export const AllProducts = [
    { id: 1, product: "product 1" },
    { id: 2, product: "product 2" },
    { id: 3, product: "product 3" },
    { id: 4, product: "product 4" },
]

const products = () => {

    return (
        <>
            {
                AllProducts.map((item) => {
                    return <div key={item.id}>
                        <Link href={`product/${item.id}`}>
                            <h1>{item.product}</h1>
                        </Link>
                    </div>
                })
            }

        </>
    )
}

export default products