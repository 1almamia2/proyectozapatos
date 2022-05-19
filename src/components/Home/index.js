import React from "react";
import "./home.css";

const Home = () => {
    return (
        <>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src={require("../../assets/images/welcome.jpg").default} alt="First slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={require("../../assets/images/foto2.jpg").default} alt="Second slide"/>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src={require("../../assets/images/foto3.jpg").default} alt="Third slide"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;