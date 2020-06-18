import React from 'react';
import styled from "styled-components"
import mainBcg from "../images/mainBg.jpeg" 

const Hero = ({ img, title, max, children, description }) => {
    return (
        <HeroWrapper max={max} img={img}>
            <div className="banner">
                <h1 className="title">{title}</h1>
                <h6 className="description">{description}</h6>
                {children}
            </div>
        </HeroWrapper>
    );
}

const HeroWrapper = styled.div`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: ${props => (props.max ? "80vh" : "60vh")};
    color: var(--mainWhite);
    background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)), url(${props => (props.img)}) center/cover no-repeat;

    .title {
        padding-top: 2rem;
        font-size: 3.5rem;
        text-shadow: 4px 4px 2px rgba(150, 150, 150, 0.5);
        text-transform: uppercase;
        letter-spacing: var(--mainSpacing);
        font-weight: bold;
    }

    .description {
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--mainSpacing);
    }
`;

Hero.defaultProps = {
    img: mainBcg
}


export default Hero;


