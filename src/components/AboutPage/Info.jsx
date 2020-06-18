import React from 'react';
import Title from "../Title"
import aboutBcg from "../../images/aboutImg.jpeg"
import { Link } from "react-router-dom"

const Info = () => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <img src={aboutBcg} className="img-fluid img-thumbnail" alt="about" style={{
                            background: "var(--darkGray)"
                        }}/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3">
                        <Title title="discover and buy the latest tech products"/>
                        <p className="text-lead text-muted my-3">
                            We’re constantly searching for the greatest content to add to our platform. Visit our website or open the app to access over 10,000 products (and counting!) to find that one perfect gift.
                        </p>
                        <p className="text-lead text-muted my-3">
                            Every product features a short description, multiple photos, and a video as well as specs and different models. Never get lost in an e-commerce website again.
                        </p>
                        <Link to="/products" className="main-link" style={{
                            marginTop: "2rem"
                        }}>Our Products</Link>
                    </div>
                </div>
            </div>
            
        </section>
    );
}

export default Info;
