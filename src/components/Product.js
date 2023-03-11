import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import './product/product.css';

const Product = (props) => {
    const {product} = props
    console.log(product)
    return (
        <Card
            onClick={()=>{props.setSelectedProductId(product._id)}}
            className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>


                <Card.Text as="h3">
                    ${product.price}
                </Card.Text>
            </Card.Body>
            <button
                onClick={()=>{props.setProductsInCart([...props.productsInCart, product])}}
                className={'add-to-cart-button'}>
                Add to cart
            </button>
        </Card>
    )
}

export default Product
