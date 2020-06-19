import React from 'react';
import {Link} from "react-router-dom"
import Title from "../Title"
import { ProductConsumer } from "../../context"

// Components
import Product from "../Product"

const FeaturedProducts = () => {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="featured products" center/>
                {/* Product */}
                <div className="row">
                    <ProductConsumer>
                        {value => {
                            const { featuredProducts } = value
                            return featuredProducts.map(product => (
                                <Product key={product.id} product={product}/>
                            ))
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </section>
    );
}

export default FeaturedProducts;
