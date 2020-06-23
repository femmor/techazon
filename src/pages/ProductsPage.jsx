import React from 'react';
import Products from "../components/ProductsPage/Products"
import Hero from "../components/Hero"
import productBcg from "../images/productsPage.jpeg"

const ProductsPage = () => {
    return (
        <>
            <Hero title="Our Products" img={productBcg} description="select from thousands of tech products"/>
           <Products/>
        </>
    );
}

export default ProductsPage;
