import React from "react";
import { CartProvider } from "react-use-cart";
import CardProducts from "../components/CardProducts/index";

const Products = () => {
    return (
        <CartProvider>
            <CardProducts />
        </CartProvider>
    );
}

export default Products;