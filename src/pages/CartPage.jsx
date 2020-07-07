import React from 'react';
import Hero from "../components/Hero"
import cartBcg from "../images/cartBcg.jpeg"
import CartSection from "../components/CartPage/index"

function CartPage(props) {
    return (
      <>
        <Hero img={cartBcg} title="cart"/>
        <CartSection history={props.history}/>
      </>
  );
}

export default CartPage;
