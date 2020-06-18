import React from 'react';
import { ProductConsumer } from "../context"
import styled from "styled-components"

const SideCart = () => {
    return (
        <ProductConsumer>
            {value => {
                const { cartOpen, closeCart, cart, cartItems } = value
                return (
                    <CartWrapper show={cartOpen} onClick={closeCart}>
                        <p>Cart items: {cartItems}</p>
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

    @media (min-width:576px) {
        width: 20rem;
    }
`

export default SideCart;
