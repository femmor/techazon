import React, { Component, createContext } from 'react';
import { linkData } from "./linkData"
import {socialData} from "./socialData"
import { items } from "./productData"

const ProductContext = createContext()

// Provider
// Consumer

class ProductProvider extends Component {
    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        socialIcons: socialData,
        // items in the cart
        cart: [],
        // Product state items
        cartItems: 0,
        cartSubtotal: 0,
        cartTax: 0,
        cartTotal: 0,
        // all products
        storeProducts: [],
        // filtered products
        filteredProducts: [],
        // featured products
        featuredProducts: [],
        singleProduct: {},
        loading: true,
        // product filter properties
        search: "",
        price: 0,
        min: 0,
        max: 0,
        company: "all",
        shipping: false
    }

    // Set Products
    setProducts = (products) => {
        // get all products
        let storeProducts = products.map(item => {
            const { id } = item.sys
            const image = item.fields.image.fields.file.url
            const product = { id, ...item.fields, image }
            return product
        })
        
        // featured products
        let featuredProducts = storeProducts.filter(item => item.featured) 

        // Get max price
        let maxPrice = Math.max(...storeProducts.map(item => item.price))
        
        // Set state
        this.setState({
            storeProducts,
            filteredProducts: storeProducts,
            featuredProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false,
            price: maxPrice,
            max: maxPrice
        }, () => {
            this.addTotals()
        })
    }

    componentDidMount() {
        // from contentful
        this.setProducts(items)
    }

    // get cart from local storage
    getStorageCart = () => {
        let cart;
        if(localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"))
        } else {
            cart = []
        }
        return cart
    }

    // get single product from local storage
    getStorageProduct = () => {
        return localStorage.getItem("singleProduct") ? JSON.parse(localStorage.getItem("singleProduct")) : {}
    }

    // get totals 
    getTotals = () => {
        // Initialize the subTotal
        let subTotal = 0
        // Initialize the cartItems
        let cartItems = 0
        // Get all the totals in the cart
        this.state.cart.forEach(item => {
            subTotal += item.total
            cartItems += item.count
        })

        subTotal = parseFloat(subTotal.toFixed(2))
        // Calculate tax
        let tax = subTotal * 0.2
        tax = parseFloat(tax.toFixed(2))

        // final cart total
        let total = subTotal + tax
        total = parseFloat(total.toFixed(2))

        return {
            cartItems,
            subTotal,
            tax,
            total
        }
    }

    // add totals 
    addTotals = () => {
        const totals = this.getTotals()
        this.setState({
            cartItems: totals.cartItems,
            cartSubtotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        })
    }

    // sync storage - called when we add item to cart
    syncStorage = () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart));
    } 

    // add to cart
    addToCart = (id) => {
        // Get all the items from the cart
        let tempCart = [...this.state.cart]
        // Get all the products in the state
        let tempProducts = [...this.state.storeProducts]
        let tempItem = tempCart.find(item => item.id === id)

        // Check if the tempItem is not in the cart
        if(!tempItem) {
            tempItem = tempProducts.find(item => item.id === id)
            // set total to the price of the tempItem
            let total = tempItem.price
            let cartItem = {...tempItem, count : 1, total}
            tempCart = [...tempCart, cartItem]
        } else {
            // If the item is already in the cart
            tempItem.count++
            tempItem.total = tempItem.price * tempItem.count
            tempItem.total = parseFloat(tempItem.total.toFixed(2))
        }

        // Set the state
        this.setState(() => {
            return {
                cart: tempCart
            }
        }, () => {
            this.addTotals()
            this.syncStorage()
            this.openCart()
        })
    }

    // set single product
    setSingleProduct = (id) => {
        let product = this.state.storeProducts.find(product => product.id === id)
        localStorage.setItem("singleProduct", JSON.stringify(product))
        this.setState({
            singleProduct: {...product},
            loading: false
        })
    }


    // handleSidebar
    handleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    // handleSidecart
    handleCart = () => {
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    }

    // close cart
    closeCart = () => {
        this.setState({
            cartOpen: false
        })
    }

    // open cart
    openCart = () => {
        this.setState({
            cartOpen: true
        })
    }

    // Cart functionality
    
    // increment
    increment = (id) => {
        // Get all the products from the cart
        let tempCart = [...this.state.cart]
        // Get the particular item from the cart
        const cartItem = tempCart.find(item => item.id === id)
        // Increment the count
        cartItem.count++
        // Cart Total = count * price
        cartItem.total = cartItem.count * cartItem.price
        // convert the cart total to fixed in 2 decimal places with parse 
        cartItem.total = parseFloat(cartItem.total.toFixed(2))
        // set the cart state to temp cart and run the addTotal and syncStorage functions to persist the data
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals()
            this.syncStorage()
        })
    }

    // decrement
    decrement = (id) => {
        // Get all the products from the cart
        let tempCart = [...this.state.cart]
        // Get the particular item from the cart
        const cartItem = tempCart.find(item => item.id === id)
        // Decrease the count by 1
        cartItem.count = cartItem.count - 1
        // Check if cartItem is 0
        if(cartItem.count === 0) {
            this.removeItem(id)
        } else {
            // Cart Total = count * price
            cartItem.total = cartItem.count * cartItem.price
            // convert the cart total to fixed in 2 decimal places with parse 
            cartItem.total = parseFloat(cartItem.total.toFixed(2))

            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals()
                this.syncStorage()
            })
        }
    }

    // removeItem
    removeItem = (id) => {
        // Copy all products from the cart
        let tempCart = [...this.state.cart]
        // Filter-out products with id not equal to the particular id
        tempCart = tempCart.filter(item => item.id !== id)
        // Set state to the filtered products
        this.setState({
            cart: [...tempCart]
        }, () => {
            // add totals and store in local storage
            this.addTotals()
            this.syncStorage()
        })
    }

    // clearCart
    clearCart = () => {
        // Set cart state to an empty array
        this.setState({
            cart: []
        }, () => {
            // add totals and store in local storage
            this.addTotals()
            this.syncStorage()
        })
    }

    // Product filtering functions

    // handle change method
    handleChange = (e) => {
        // get the input values
        const name = e.target.name
        const value = e.target.type === "checkbox" 
        ? e.target.checked 
        : e.target.value
        // Set the input name to the value
        this.setState({
            [name]: value
        }, 
            // call the sortData method
            this.sortData
        )
    }

    // sortData method
    sortData = () => {
        // Destructure the filtering values needed from the state 
        const { storeProducts, price, company, shipping, search } = this.state
        // set tempProducts to a copy of the storeProducts
        let tempProducts = [...storeProducts]

        // Filter by price functionality
        let tempPrice = parseInt(price)
        tempProducts = tempProducts.filter(item => item.price <= tempPrice)

        // Filter by brand functionality
        // Filter company, check if it's not equal to all
        if (company !== "all") {
            // get the value from tempProducts
            tempProducts = tempProducts.filter(item => item.company === company)
        }

        // Filter by free shipping functionality
        if(shipping){
            tempProducts = tempProducts.filter(item => item.freeShipping === true)
        }

        // Set filteredProducts to tempProduct
        this.setState({
            filteredProducts: tempProducts
        })
    }

    render() {
        return (
            <ProductContext.Provider 
                value={{
                    ...this.state,
                    handleSidebar: this.handleSidebar,
                    handleCart: this.handleCart,
                    openCart: this.openCart,
                    closeCart: this.closeCart,
                    addToCart: this.addToCart,
                    setSingleProduct: this.setSingleProduct,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    handleChange: this.handleChange
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

// Product Consumer
const ProductConsumer = ProductContext.Consumer

export { ProductProvider, ProductConsumer }
