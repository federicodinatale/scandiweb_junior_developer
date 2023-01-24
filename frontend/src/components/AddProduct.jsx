import React, {useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom';

import Alert from 'react-bootstrap/Alert';
import {Button} from "./Button/Button";
import FormContainer from "./Form/Form";

import productsApi from "../api/productsApi";


export default function AddProduct() {

    const [inputs,
        setInputs] = useState({});

    const [errorForm,
        setErrorForm] = useState();
    const [show,
        setShow] = useState(false);

    const [errorSku,
        setErrorSku] = useState(false);

    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/")
    }

    useEffect(() => {}, [inputs])
    useEffect(() => {}, [errorSku, setErrorSku])

    const handleSubmit = (e) => {

        e.preventDefault();
        for (const [key,
            value]of Object.entries(inputs)) {

            if (value === undefined || value === '') {
                setShow(true)
                setErrorForm(key)
                return;

            } else if (value === 'notNumber') {

                setShow(true)
                setErrorForm(`Numeric value for ${key}`)
                return;

            } else {
                setShow(false)
                setErrorForm('')
            }

        }

        newProduct(inputs);

    }

    async function newProduct(inputs) {
        let allProducts = await productsApi.getProducts();
        allProducts = allProducts.data.data;
        let error = false;

        for (let i = 0; i < allProducts.length; i++) {

            if (inputs.sku === allProducts[i].sku) {
                setErrorSku(true);
                error = true;
                break;
            }

        }

        if (!error) {
            productsApi.createProducts(inputs);
            navigate("/")
            setErrorSku(false)
        }

    }

    return <div>
        <div id="main-container">
            <form onSubmit={handleSubmit} id="product_form">
                <div className="m-5">
                    <h1 className="text-left">Product Add</h1>

                    <div className='d-flex justify-content-end'>

                        <Button name="Save" onClick={handleSubmit} className="me-2" typeStyle="primaryButton" type="submit"/>
                        <Button name="Cancel" onClick={navigateToHome} typeStyle="deleteButton"/>


                    </div>
                </div>

                <hr/>

                <div className="form-container mx-auto mt-5">

                    <div className='formErrors'>
                        {show && (
                            <Alert variant="danger" className="text-center">
                                <Alert.Heading>
                                    Please provide</Alert.Heading>{errorForm}</Alert>
                        )}

                        {errorSku && (
                            <Alert variant="danger" className="text-center">
                                <Alert.Heading>
                                    Sku already in the database</Alert.Heading>
                            </Alert>
                        )}

                    </div>

                    <FormContainer setInputs={setInputs} />

                </div>
            </form>
        </div>
    </div>
}
