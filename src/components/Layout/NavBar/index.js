import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import { TiShoppingCart } from "react-icons/ti";

const NavBar = () => {
    return (
        <>
            <nav class="stroke">
                <ul>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/products">Zapatos</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contacto</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="logo-cart"><TiShoppingCart /></Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default NavBar;