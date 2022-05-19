import React from "react";
import { useCart } from "react-use-cart";
import { BsFillCartDashFill, BsCartPlusFill } from "react-icons/bs";
import Swal from "sweetalert2";
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        items,
        cartTotal,
        updateItemQuantity,
        emptyCart,
    } = useCart();
    const succes = () => {
        emptyCart()
        return Swal.fire(
            'compra realizada!',
            'muchas gracias!',
            'success'
        )
    }
    if (isEmpty) {
        return (
            <h1 className="text-center">Se vacio el Carrito!</h1>
        );
    }
    return (
        <>
            <section className="py-5 container">
                <div className="row justify-content-center">
                    <div className="col-12 mt-5">
                        <table className="table table--ligth table-hover m-5 mt-5">
                            <tbody>
                                {items.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>
                                                <img src={item.image}
                                                    style={{ height: '7rem', width: '8rem' }} />
                                            </td>
                                            <td>
                                                {item.title}
                                            </td>
                                            <td>
                                                {`$${item.price}`}
                                            </td>
                                            <td>
                                                Cantidad ({item.quantity})
                                            </td>
                                            <td>
                                                <button className="btn btn-danger ms-3"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>
                                                    <BsFillCartDashFill />
                                                </button>
                                                <button className="btn btn-warning ms-3"
                                                    onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>
                                                    <BsCartPlusFill />
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-auto ms-auto">
                        <h2>Precio Total: ${cartTotal}</h2>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-dark m-2"
                            onClick={succes}>finalizar la compra</button>
                        <button className="btn btn-dark m-2"
                            onClick={emptyCart}>vaciar carrito</button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;