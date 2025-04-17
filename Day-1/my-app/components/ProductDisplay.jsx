"use client";

import all_product from "@/public/assets/all_product";
import Card from "@/components/Card";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
// import Image from "next/image";

const ProductDisplay = (props) => {
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            redirect("/login");
        }

    }, []);

    return (
        <div className="mx-auto">
            <div className="my-5 ml-20 mx-auto ">
                <Image src={props.banner} alt="banners" width={1500} height={300}></Image>
            </div>
            <div className="my-10 w-96 mx-auto ">
                <marquee behavior="" direction="" className="text-center text-4xl mt-10 font-bold">{props.heading} </marquee>
                <hr className="w-24 mx-auto" />
            </div>
            <div className="flex flex-wrap justify-around">
                {all_product.map((item) => {
                    if (props.category === item.category) {

                        return (
                            <Card
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                img={item.image}
                                old_price={item.old_price}
                                new_price={item.new_price}
                            />
                        );
                    } else {
                        null
                    }
                })}
            </div>
        </div>
    )
}

export default ProductDisplay