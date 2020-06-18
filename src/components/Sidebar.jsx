import React from 'react';
import { ProductConsumer } from "../context"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Sidebar = () => {
    return (
        <ProductConsumer>
            {value => {
                const { links, sidebarOpen, handleSidebar } = value
                return (
                    <SideWrapper show={sidebarOpen}>
                            <ul>
                            {links.map(link => {
                                    return(
                                        <li key={link.id} >
                                            <Link to={link.path} className="sidebar-link" onClick={handleSidebar}>{link.text}</Link>
                                        </li>
                                    )
                                })}
                            </ul>
                    </SideWrapper>
                )
            }}
        </ProductConsumer>
    );
}

const SideWrapper = styled.nav`
    position: fixed;
    top: 61px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--mainWhite);
    z-index: 1;
    border-right: 2px solid var(--secondary-color);
    transition: var(--mainTransition);
    transform: ${props => (props.show ? 'translateX(0)' : 'translateX(-100%)')};

    ul {
        list-style-type: none;
        padding: 0 !important;
    }

    .sidebar-link {
        display: block;
        font-size: 1.5rem;
        color: var(--mainBlack);
        text-transform: capitalize;
        padding: 0.5rem 1.5rem;
        background: transparent;
        transition: var(--mainTransition);
    }

    .sidebar-link:hover {
        text-decoration: none;
        background: var(--primary-color);
        color: var(--mainWhite);
        padding: 0.5rem 1.5rem 0.5rem 2.5rem;
    }

    @media (min-width:576px) {
        width: 20rem;
    }
`

export default Sidebar;
