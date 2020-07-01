import React from 'react';
import { ProductConsumer } from "../context"
import styled from "styled-components"
import { Link } from "react-router-dom"

const SideCart = () => {
    return (
        <ProductConsumer>
            {value => {
                const { cartOpen, closeCart, cart, cartItems, cartTotal } = value
                return (
                    <CartWrapper show={cartOpen} onClick={closeCart}>
                        <ul>
                            {
                                cart.map(item => {
                                    const { id, title, price, image, count } = item
                                    return (
                                        <li key={id} className="cart-item mb-4 ">
                                            <img src={`../${image}`} alt="product image" className="img-fluid" width="35"/>
                                            <div className="mt-3">
                                                <h6 className="text-uppercase">{title}</h6>
                                                <h6 className="text-title text-capitalize">amount: {count}</h6>
                                            </div>
                                            <hr/>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        {
                            cartTotal < 1 ? 
                            (
                                <>
                                    <h4 className="text-center text-capitalize text-main mt-5">cart is empty.</h4>
                                    <div className="text-center my-5">
                                        <Link to="/products" className="main-link">
                                            shop now
                                        </Link>
                                    </div>
                                </>
                            ) 
                            : 
                            (
                                <>
                                    <h4 className="text-center text-capitalize text-main mt-5">cart total: ${cartTotal}</h4>
                                    <div className="text-center my-5">
                                        <Link to="/cart" className="main-link">
                                            view cart
                                        </Link>
                                    </div>
                                </>
                            )
                        }
                    </CartWrapper>
                )
            }}
        </ProductConsumer>
    );
}

const CartWrapper = styled.nav`
    position: fixed;
    top: 60px;
    right: 0;
    width: 100%;
    height: 100%;
    background: var(--mainWhite);
    z-index: 1;
    border-left: 2px solid var(--secondary-color);
    transition: var(--mainTransition);
    transform: ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
    overflow: scroll;
    padding: 2rem;

    ul {
        padding: 0 !important;
    }

    .cart-item {
        list-style-type: none;
    }

    @media (min-width:576px) {
        width: 20rem;
    }

`

export default SideCart;
