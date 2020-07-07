import React from 'react';
import { ProductConsumer } from "../../context/"
import PaypalButton from "./PaypalButton"

const CartTotals = ({ history }) => {
    return (
        <div className="container">
            <div className="row">
                <ProductConsumer>
                    { value => {
                        const { cartTax, cartTotal, cartSubtotal, clearCart } = value
                        if (cartSubtotal < 1) {
                            return null
                        }
                        return (
                            <div className="col text-title text-center my-4">
                                <button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}>clear cart</button>
                                <h3>subtotal: ${cartSubtotal}</h3>
                                <h3>tax: ${cartTax}</h3>
                                <h3>total: ${cartTotal}</h3>
                                <PaypalButton history={history} cartTotal={cartTotal} clearCart={clearCart}/>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </div>
        </div>
    );
}

export default CartTotals;
