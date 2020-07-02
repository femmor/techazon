import React from 'react';
import styled from "styled-components"
import {ProductConsumer} from "../../context"

const ProductFilter = () => {
    return (
        <ProductConsumer>
            {value => {
                const {handleChange, search, minPrice, maxPrice, price, company, storeProducts, shipping} = value

                let companies = new Set()
                companies.add("all products")
                for(let product in storeProducts){
                    companies.add(storeProducts[product]["company"])
                }
                companies = [...companies]                

                return (
                    <div className="row my-5">
                        <div className="col-10 mx-auto">
                            <FilterWrapper>
                                {/* text search */}
                                    <div>
                                        <label htmlFor="search">search products</label>
                                        <input type="text" name="search" className="filter-item" id="search" onChange={handleChange} value={search} placeholder="samsung mobile phone..."/>
                                    </div>
                                {/* end text search */}
                                {/* category search */}
                                    <div>
                                        <label htmlFor="company">search by brand</label>
                                        <select name="company" id="company" className="filter-item" onChange={handleChange} value={company}>
                                            {
                                                companies.map((company, index) => {
                                                    return (
                                                        <option key={index} value={company}>{company}</option>
                                                    )
                                                })
                                            }
                                            
                                        </select>
                                    </div>
                                {/* end category search */} 
                                {/* price range */}
                                    <div>
                                        <label htmlFor="price">
                                            <p className="mb-2">filter by price: ${price}</p>
                                        </label>
                                        <input type="range" className="filter-price" id="price" value={price} onChange={handleChange} min={minPrice} max={maxPrice}/>
                                    </div>
                                {/* end price range */}
                                {/* free shipping */}
                                    <div>
                                        <label htmlFor="shipping" className="mx-2">free shipping</label>
                                        <input type="checkbox" className="" checked={shipping && true} id={shipping} onChange={handleChange}/>
                                    </div>
                                {/* end free shipping */}
                            </FilterWrapper>
                        </div>
                    </div>
                )
            }}
        </ProductConsumer>
    );
}

const FilterWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-column-gap: 2rem;
    grid-row-gap: 1rem;

    label {
        font-weight: bold;
        text-transform: capitalize;
    }

    .filter-item, .filter-price {
        display: block;
        width: 100%;
        background: transparent;
        border-radius: 0.5rem;
        border: 2px solid var(--darkGray)
    }

`

export default ProductFilter;
