import React from 'react';
import Title from "../Title"
import CartColumns from "./CartColumns"
import CartList from "./CartList"
import CartTotal from "./CartTotals"

const Cart = () => {
    return (
        <section className="py-5">
            {/* Title */}
            <div className="container">
                <Title title="shopping cart items" center/>
            </div>
                {/* Cart columns */}
                <CartColumns/>
                {/* Cart list */}
                <CartList/>
                {/* Cart totals */}
                <CartTotal/>
        </section>
    );
}

export default Cart;
