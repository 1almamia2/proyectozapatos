import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <>
            <footer class="text-center text-white bg-dark mt-5 mb-0">
                <div class="text-center p-3 bg-dark">
                    <div class="text-center p-3 bg-dark">
                    </div>
                    <section class="text-center mb-5">
                        <a href="#" class="btn btn-outline-dark text-white me-4"><BsInstagram /> Instagram</a>

                        <a href="#" class="btn btn-outline-dark text-white me-4"><AiOutlineFacebook /> Facebook</a>

                        <a href="#" class="btn btn-outline-dark text-white me-4"><SiGmail /> Email</a>
                    </section>
                    <h5>
                        Copyright &copy; 2022 |
                        <a class="text-warning text-decoration-none" href="#about"> Diseñado por Aliceshoes</a>
                    </h5>
                </div>
            </footer>
        </>
    );
}

export default Footer;