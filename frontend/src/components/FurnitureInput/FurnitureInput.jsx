import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import InfoInput from '../InformationInput/InfoInput';

function FurnitureInput({setResult}) {
  
    const [height,
        setHeight] = useState('');
    const [width,
        setWidth] = useState('');
    const [length,
        setLength] = useState('');

    useEffect(() => {

        if (height ==='' || width ==='' || length ==='' ) {
            setResult('')
            return;        
        } else {
            checkInput(height, setHeight);
            checkInput(width, setWidth);
            checkInput(length, setLength);

            if (height.includes("notNumber") ||  width.includes("notNumber") || length.includes("notNumber")) {
                setResult('notNumber');
                return;
            } else {
                setResult(`${height}x${width}x${length}`)
            }
        }
    }, [height, width, length, checkInput]);


    function checkInput(value, setValue) {
        for (let i = 0; i < value.length; i ++) {

            if (!/[0-9,.]/.test(value[i]))
            {
                setValue("notNumber")
                break;
            } else {
                setValue((Number(value.replace(",", ".")).toFixed(2)));
            }
        }
    }

    return (
        <div className='mt-3'>
            <InputGroup className="mb-3">
                <InputGroup.Text >Height</InputGroup.Text>
                <Form.Control
                    id="height"
                    onChange={(e) => {
                    setHeight(e.target.value)
                }}
                    placeholder="CM"/>
            </InputGroup>
            <InfoInput info={"Please provide height."}/>

            <InputGroup className="mb-3">
                <InputGroup.Text >Width</InputGroup.Text>
                <Form.Control
                    id="width"
                    onChange={(e) => {
                    setWidth(e.target.value)
                }}
                    placeholder="CM"/>
            </InputGroup>
            <InfoInput info={"Please provide width."}/>


            <InputGroup className="mb-3">
                <InputGroup.Text >Length</InputGroup.Text>
                <Form.Control
                    id="length"
                    onChange={(e) => {
                    setLength(e.target.value)
                }}
                    placeholder="CM"/>
            </InputGroup>
            <InfoInput info={"Please provide length."}/>
        </div>
    );
}

export default FurnitureInput;