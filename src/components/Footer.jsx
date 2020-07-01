import React from 'react';
import styled from "styled-components"
import { ProductConsumer } from "../context"

const Footer = () => {

    const date = new Date()
    const year = date.getFullYear()

    return (
        <ProductConsumer>
          {value => {
              return (
                  <FooterWrapper>
                      <div className="container py-3">
                          <div className="row">
                                <div className="col-md-6">
                                    <p>&copy; {year} Techazon. All Rights Reserved.</p>
                                </div>
                                <div className="col-md-6 d-flex justify-content-end">
                                    {value.socialIcons.map(item => (
                                        <a href={item.url} key={item.id}>{item.icon}</a>
                                    ))}
                                </div>
                          </div>
                      </div>
                  </FooterWrapper>
              )
          }}
        </ProductConsumer>
    );
}

const FooterWrapper = styled.div`
    color: var(--mainWhite);
    background: var(--darkGray);

    .icon {
        font-size: 2rem;
        color: var(--mainGray);
        transition: var(--mainTransition);
        margin-left: 1rem;
    }

    .icon:hover {
        color: var(--mainYellow);
        cursor: pointer;
    }
`;

export default Footer;
