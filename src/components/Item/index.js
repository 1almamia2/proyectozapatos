import React from "react";
import { useCart } from "react-use-cart";

const Card = (props) => {
    const { addItem } = useCart();
    return (
        <>
            <div className="coll-11 col-md col-lg-3 mx-0 mb-4">
                <div className="card p-0 overflow-hidden h-100 shadow">
                    <img src={props.image} className="card-img-top img-fluid" style={{height: "60%"}}/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{props.title}</h5>
                        <h5 className="card-title">${props.price}</h5>
                        <h5 className="card-text">{props.desc}</h5>
                        <button className="btn btn-warning mt-3" onClick={() => addItem(props.item)}>Agregar</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;