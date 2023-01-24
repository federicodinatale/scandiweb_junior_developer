import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import InfoInput from '../InformationInput/InfoInput';

export default function DvdInput({setResult}) {

    const [dvd,
        setDvd] = useState('');

    useEffect(() => {

        for (let i = 0; i < dvd.length; i ++) {

            if (!/[0-9,.]/.test(dvd[i]))
            {
                setDvd("notNumber")
                break;
            } else {
                setDvd(Number(dvd.replace(",", ".")))
            }
        }
        setResult(dvd)
    }, [dvd]);

    return (
        <div className="mt-3">
            <InputGroup className="mb-3">
                <InputGroup.Text id="book">DVD</InputGroup.Text>
                <Form.Control
                    id="size"
                    onChange={(e) => {
                    setDvd(e.target.value)
                }}
                    placeholder="insert MB"/>
        

            </InputGroup>

            <InfoInput info={"Please provide size."}/>
        </div>
    )
}
