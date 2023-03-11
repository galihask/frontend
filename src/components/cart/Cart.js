import {useState} from "react";

const Cart = (props) => {

    const {productsInCart, setProductsInCart} = props


    const updateCart = () => {
    }

    const getCart = () => {
    }

    const createCart = () => {
    }

    const checkOut = () => {
    }


    return (
        <>
            <h1>Cart</h1>
            <ul>
                {
                    productsInCart.map(product => {
                        return (
                            <li key={product._id}>
                                <p>{product.name}</p>
                                <p>{product.price}</p>
                                <button
                                    onClick={() => {
                                        const newCart = productsInCart.filter((p) => {
                                            return p._id !== product._id
                                        })
                                        setProductsInCart(newCart)
                                    }}
                                    style={{
                                        backgroundColor: 'red',
                                        white: 'white'
                                    }}>Remove
                                </button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )

}

export default Cart