"use client";

import all_product from "@/public/assets/all_product";
import Card from "@/components/Card";
import {  useEffect } from "react";
import { redirect } from "next/navigation";


const products = () => {
    useEffect(() => {
        const user = localStorage.getItem("user");
        if (!user) {
            redirect("/login");
        }

    }, []);

    return (
        <div className="mx-auto">
            <div className="my-10 w-80 mx-auto">
                <marquee behavior="" direction="" className="text-center text-4xl mt-10 font-bold"> New Arrivale </marquee>
                <hr className="w-24 mx-auto" />
            </div>
            <div className="flex flex-wrap gap-5 justify-around">
                {all_product.map((item) => {
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
                })}
            </div>
        </div>
    )
}

export default products

