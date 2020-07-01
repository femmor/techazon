import React from 'react';
import { Link } from "react-router-dom"
import heroImg from "../images/mainBcg.jpeg"
import Hero from "../components/Hero"
import { ProductConsumer } from "../context"

const SingleProductPage = () => {
    return (
        <ProductConsumer>
            {value => {
                const {singleProduct, addToCart, loading} = value
                const { title, price, company, id, description, image } = singleProduct
                return (
                    <>
                        <Hero img={`../${image}`} title={title} />
                        <section className="py-5">
                            <div className="container">
                                <div className="row">
                                    {
                                        loading ? "product loading..." : 
                                        <>
                                            <div className="col-10 col-md-6 col-sm-8 mx-auto my-3">
                                            {/* src = image from contentful */}
                                            <img src={`../${image}`} alt="product image" className="img-fluid"/>
                                            </div>
                                            <div className="col-10 col-md-6 col-sm-8 mx-auto my-3">
                                                <h5 className="text-title mb-4">model: {title}</h5>
                                                <h5 className="text-capitalize text-muted mb-4">brand: {company}</h5>
                                                <h5 className="text-main text-capitalize mb-4">price: ${price}</h5>
                                                <h5 className="text-capitalize text-title">product details:</h5>
                                                <p className="">{description}</p>
                                                <button type="button" className="main-link" style={{
                                                    margin: "0.7rem"
                                                }} onClick={() => addToCart(id)}>
                                                    add to cart
                                                </button>
                                                <Link to="/products" className="main-link" style={{
                                                    margin: "0.2rem"
                                                }}>back to products</Link>
                                            </div>
                                        </>
                                    }
                                </div>
                            </div>
                        </section>
                    </>
                )
            }}
        </ProductConsumer>
    );
}

export default SingleProductPage;
