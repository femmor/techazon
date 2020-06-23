import React from 'react';
import {ProductConsumer} from "../../context"
import Product from "../Product"
import Title from "../Title"
import { FaProductHunt } from 'react-icons/fa';

const Products = () => {
    return (
        <ProductConsumer>
            {value => {
                const {filteredProducts} = value;
                return (
                    <section className="py-5">
                        <div className="container">
                            {/* Title */}
                            <Title center title="All Products"/>
                            {/* Products */}
                                <div className="row py-2">
                                    {
                                        filteredProducts.map(product => (
                                            <Product key={product.id} product={product}/>
                                        ))
                                    
                                    }
                                </div>
                        </div>
                    </section>
                )
            }}
        </ProductConsumer>
    );
}

export default Products;
