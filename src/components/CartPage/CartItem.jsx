import React from 'react';
import { FaTrash, FaChevronCircleUp, FaChevronCircleDown } from "react-icons/fa"

function CartItem ({ cartItem, increment, decrement, removeItem }) {
    const { id, image, title, price, count, total } = cartItem
    return (
        <div className="row mt-5 mt-lg-0 text-capitalize text-center align-items-center">
            {/* image */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <img src={`../${image}`} className="img-fluid" alt="product" width="60"/>
            </div>
            {/* end of image */}
            {/* title */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none text-muted">product: </span>{title}
            </div>
            {/* end of title */}
            {/* price */}
            <div className="col-10 mx-auto col-lg-2 pb-2">
                <span className="d-lg-none text-muted">price: </span>${price}
            </div>
            {/* end of price */}
            {/* count controls */}
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <FaChevronCircleDown className="cart-icon text-primary" onClick={() => decrement(id)}/>
                    <span className="text-title text-muted mx-3">{count}</span>
                    <FaChevronCircleUp className="cart-icon text-primary" onClick={() => increment(id)}/>
                </div>
            </div>
            {/* end of count controls */}
            {/* remove */}
            <div className="col-10 mx-auto col-lg-2">
                <FaTrash className="text-danger cart-icon" onClick={() => removeItem(id)}/>
            </div>
            {/* end of remove */}

            {/* item total */}
            <div className="col-10 mx-auto col-lg-2">
                <span className="text-muted">item total: <strong>${total}</strong></span>
            </div>
            {/* end item total */}
        </div>

    );
}

export default CartItem;
