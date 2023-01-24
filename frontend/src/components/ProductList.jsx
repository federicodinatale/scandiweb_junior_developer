import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom"

import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';

import productsApi from '../api/productsApi';

import {Button} from "./Button/Button";

export default function ProductList() {

    const navigate = useNavigate();

    const [products,
        setProducts] = useState([]);
    const [deleteProduct,
        setDeleteProduct] = useState([]);

    useEffect(() => {
        productsApi
            .getProducts()
            .then(response => response.data.data.map(product => ({
                ...product,
                price: product
                    .price
                    .toFixed(2)
            })))
            .then(products => setProducts(products))
    }, [products])

    const addProduct = () => {
        navigate("/addproduct")
    }

    const content = products.map((product, key) => {

        let info;
        let value;
        if (product.productType === "DVD") {
            info = "Size:";
            value = "MB";
        } else if (product.productType === "BOOK") {
            info = "Weight:";
            value = "KG";
        } else {
            info = "Dimension: ";
        }

        return (

            <Col xs={6} md={4} key={product.sku} className="h-100 mt-2">

                <Card className="h-100 card">
                    <InputGroup.Checkbox
                        id={product.sku}
                        onChange={handleDelete}
                        className="delete-checkbox"/>
                    <Card.Body className="h-100">
                        <Card.Title className="text-center">{product.name}</Card.Title>
                        <Card.Text className="text-center text-muted">{product.sku}</Card.Text>
                        <Card.Text className="text-center">{(product.price)}
                            $</Card.Text>
                        <Card.Text className="text-center">{info} {product.productSpecific}
                            {value}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        )
    })

    function handleDelete(event) {

        if (event.target.checked) {
            deleteProduct.push(event.target.id)
            setDeleteProduct(deleteProduct);

        } else {
            const newDeleteProduct = deleteProduct.filter((x) => x !== event.target.id);
            setDeleteProduct([]);
            setDeleteProduct(newDeleteProduct);
        }
    }

    function deleteMassiveProducts() {
        productsApi.massDelete(deleteProduct);
        productsApi.getProducts();
    }

    return (
        <div>
            <div id="main-container" className="m-5">
                <div className="">
                    <h1 className="text-left">Product List</h1>
                </div>
                <div className='d-flex justify-content-end'>
                    <Button
                        name="ADD"
                        onClick={addProduct}
                        typeStyle="primaryButton"
                        className="me-2"/>
                    <Button
                        name="MASS DELETE"
                        onClick={deleteMassiveProducts}
                        typeStyle="deleteButton"
                        className="me-2"/>

                </div>

            </div>
            <hr/>

            <Container className='h-100'>
                <Row className="h-100 justify-content-start">
                    {content}
                </Row>
            </Container>

        </div>
    )
}