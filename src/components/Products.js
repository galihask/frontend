import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'
import Product from './Product'
import {BACK_END_SERVER_URL} from "../App";


const Products = (props) => {

    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState(props.products)

    const fetchAll = () => {
        axios
            .get(`${BACK_END_SERVER_URL}/api/products`)
            .then((res) => {
                console.log(res.data)
                props.setProducts(res.data)

            })
    }


    const getCategories = () => {
        axios
            .get(`${BACK_END_SERVER_URL}/api/categories`)
            .then((res)=>{
                setCategories(res.data)
            })
    }

    const changeCategory = async (event) => {
        event.preventDefault()
        console.log(event.target.value)
        await setCategory(prevState => event.target.value)
        const filteredProducts = await props.products.filter((product) => {
            console.log(`checking of ${product.category_id.name} === ${category}`)
            return product.category_id.name === event.target.value
        })
        await setProducts(filteredProducts)
    }



    useEffect(() => {
        fetchAll()
        getCategories()

    }, [])


    return (
        <div>
            <h1>Latest Products</h1>
            <label htmlFor='category_select'>Filter by category</label>
            <select id='category_select' value={category} onChange={changeCategory}>
                {categories && categories.map((cat)=>{
                    return <option id={`category_select_${cat.name}`} value={cat.name}>{cat.name}</option>
                })}



                {/*<option id='category_select_electronic' value='Electric'>Electric</option>*/}
                {/*/!* <option id='category_select_food' value='food'  onClick={(event)=>{changeCategory(event.target.value)}}>Food</option> *!/*/}
                {/*<option id='category_select_clothing' value='Clothing'>Clothing</option>*/}
                {/*<option id='category_select_toys' value='Toys'>Toys</option>*/}
            </select>
            <Row>
                {products.map((product) => {
                    return <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} setSelectedProductId={props.setSelectedProductId}/>
                    </Col>
                })}
                {/* {products.map(product =>(
          <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
          <Product product={product}/>
          </Col>
        ))} */}

            </Row>
        </div>
    )
}

export default Products