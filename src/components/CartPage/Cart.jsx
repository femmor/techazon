import React from 'react';
import Title from "../Title"
import CartColumns from "./CartColumns"
import CartList from "./CartList"
import CartTotal from "./CartTotals"

const Cart = () => {
    return (
        <div>
            <Title />
            <CartColumns/>
            <CartList/>
            <CartTotal/>
        </div>
    );
}

export default Cart;
