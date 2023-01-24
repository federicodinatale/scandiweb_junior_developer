import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import InfoInput from '../InformationInput/InfoInput';

export default function BookInput({setResult}) {

    const [book,
        setBook] = useState('');

    useEffect(() => {


        for (let i = 0; i < book.length; i ++) {

            if (!/[0-9,.]/.test(book[i]))
            {
                setBook("notNumber")
                break;
            } else {
                setBook(Number(book.replace(",", ".")))
            }
        }

        setResult(book)
    }, [book]);

    return (
        <div className="mt-3">
            <InputGroup className="mb-3">
                <InputGroup.Text id="book">Book</InputGroup.Text>
                <Form.Control
                    id='weight'
                    onChange={(e) => {
                    setBook(e.target.value)
                }}
                    placeholder="insert KG"/>
            </InputGroup>
            <InfoInput info={"Please provide weight."}/>

        </div>
    )
}
