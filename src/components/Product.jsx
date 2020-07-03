import React from 'react';
import styled from "styled-components"
import { Link } from "react-router-dom"
import {FaSearch, FaCartPlus} from "react-icons/fa"
import { ProductConsumer } from "../context"

const Product = ({ product }) => {
    const { id, title, price, image } = product
    return (
        <ProductConsumer>
            {value => {
                const {addToCart, setSingleProduct} = value
                return (
                <ProductWrapper className="col-10 mx-auto col-md-6 col-sm-8 col-lg-4 my-5">
                        <div className="card">
                            <div className="img-container">
                                <img src={image} className="card-img-top p-5" alt="product" style={{
                                    height: "320px"
                                }}/>
                                <div className="product-icons">
                                    <Link to={`/product/${id}`} onClick={() => {setSingleProduct(id)}}>
                                        <FaSearch className="icon"/>
                                    </Link>
                                    <FaCartPlus className="icon cart-icon" onClick={() => {addToCart(id)}}/>
                                </div>
                            </div>
                            <div className="card-body d-flex justify-content-between">
                                <p className="text-uppercase mb-0">{title}</p>
                                <p className="text-main mb-0">${price}</p>
                            </div>
                        </div>
                </ProductWrapper>
                )
            }}
        </ProductConsumer>
    );
}

const ProductWrapper = styled.div`
    .card {
        -webkit-box-shadow: 4px 3px 5px 0px rgba(0,0,0,0.53);
        -moz-box-shadow: 4px 3px 5px 0px rgba(0,0,0,0.53);
        box-shadow: 4px 3px 5px 0px rgba(0,0,0,0.53);
        transition: var(--mainTransition);
        height: 100%;

    }

    .card:hover {
        box-shadow: 7px 10px 5px 0px rgba(0,0,0,0.53);
        cursor: pointer;
    }

    .card-img-top {
        transition: var(--mainTransition);
    }

    .card:hover .card-img-top {
        transform: scale(1.15);
        opacity: 0.2;
    }

    .img-container {
        position: relative;
    }

    .product-icons {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .icon {
        transition: var(--mainTransition);
        font-size: 2.5rem;
        margin: 0.5rem;
        padding: 0.5rem;
        opacity: 0;
        color: var(--mainWhite);
        border-radius: 0.5rem;
        background: var(--secondary-color);
    }

    .cart-icon {
        color: var(--mainRed);
        background: var(--mainYellow);
    }

    .card:hover .icon {
        opacity: 1;
    }

    .card-body {
        font-weight: bold;
        letter-spacing: 2px;
    }
   
`;

export default Product;
