import React from 'react';
import Hero from "../components/Hero"
import cartBcg from "../images/cartBcg.jpeg"
import CartSection from "../components/CartPage/index"

const CartPage = () => {
    return (
        <>
          <Hero img={cartBcg} title="cart"/>
          <CartSection/>
        </>
    );
}

export default CartPage;
