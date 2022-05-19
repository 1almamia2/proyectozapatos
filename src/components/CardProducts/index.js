import React from "react";
import Item from "../Item";
import { PorductsData } from "../../data/products";
import "./card.css";

const CardProducts = () => {
    const data = PorductsData;
    return (
        <>
            <h1 className="text-center mt-3">Zapatos De Mujer para conquistar el mundo</h1>
            <section className="py-5 container">
                <div className="row justify-content-center">
                    {data.map((item, index) => {
                        return (
                            <Item
                                image={item.image}
                                title={item.title}
                                // desc={item.desc}
                                price={item.price}
                                item={item}
                                key={index}
                            />
                        );
                    })}
                </div>
            </section>

        </>
    );
}

export default CardProducts;