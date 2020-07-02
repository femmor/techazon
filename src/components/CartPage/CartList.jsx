import React from 'react';
import { ProductConsumer } from "../../context"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"

const CartList = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <ProductConsumer>
                            { value => {
                                const { cart, increment, decrement, removeItem } = value
                                if (cart.length < 1) {
                                    return (
                                        <>
                                            <h5 className="text-title text-center my-4">
                                                your cart is currently empty.
                                            </h5>
                                            <div className="text-center">
                                                <Link to="/products" className="main-link">start shopping</Link>
                                            </div>
                                        </>
                                    )
                                } 
                                return (
                                    <>
                                        {
                                            cart.map(item => {
                                                return (
                                                    <CartItem key={item.id} cartItem={item} increment={increment} decrement={decrement} removeItem={removeItem}></CartItem>
                                                )
                                            })
                                        }
                                    </>
                                )                          
                               
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartList;
