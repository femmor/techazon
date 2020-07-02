import React from 'react';
import {ProductConsumer} from "../../context"
import Product from "../Product"
import ProductFilter from "./ProductFilter"
import Title from "../Title"

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
                            {/* Product filter */}
                            <ProductFilter />
                            {/* Products */}
                                {/* row  */}
                                <div className="row">
                                    <div className="col-10 mx-auto">
                                        {/* Total count */}
                                        <h6 className="text-title">total products: 
                                            {filteredProducts.length}
                                        </h6>
                                        <hr/>
                                    </div>
                                </div>
                                <div className="row py-2">
                                    {filteredProducts.length === 0 ? 
                                    (   
                                        <div className="col text-center text-title">
                                            sorry no items match your search...
                                        </div>
                                    ) :  
                                    (
                                        filteredProducts.map(product => (
                                            <Product key={product.id} product={product}/>
                                        ))
                                    )}
                                </div>
                        </div>
                    </section>
                )
            }}
        </ProductConsumer>
    );
}

export default Products;
