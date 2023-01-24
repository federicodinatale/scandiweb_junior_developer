import React, {useState, useEffect} from 'react'
import BookInput from '../BookInput/BookInput';
import DvdInput from '../DvdInput/DvdInput';
import FurnitureInput from '../FurnitureInput/FurnitureInput';

import Alert from 'react-bootstrap/Alert';




export default function ProductTypeSpecificInput({productTypeSelected, setProductSpecific}) {

    const [result, setResult] = useState();
    useEffect( () => {
        setProductSpecific(result)
    }, [result, productTypeSelected])

    switch (productTypeSelected) {
        case "Book":
            return <BookInput setResult={setResult}/>;
        case "Furniture":
            return <FurnitureInput  setResult={setResult}/>;

        case "DVD":
            return <DvdInput setResult={setResult}/>;
        case "Type Switcher":
            return    <Alert key={'warning'} variant={'warning'} className='mt-3'> Select a product type</Alert>
        default:
            <p></p>
            

    }
}