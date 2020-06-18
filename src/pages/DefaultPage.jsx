import React from 'react';
import Hero from "../components/Hero"
import defaultBcg from "../images/mainBcg.jpeg"
import { Link } from "react-router-dom"

const DefaultPage = () => {
    return (
        <>
          <Hero img={defaultBcg} title="404 page not found!" description="we can't seem to find the page you are looking for" max>
            <Link className="main-link" to="/" style={{
                marginTop: "2rem"
            }}>Back to Homepage</Link>
          </Hero>
        </>
    );
}

export default DefaultPage;
