import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function LabelName({nameLabel, setName}) {

    const [value,
        setValue] = useState('');

        useEffect(() => {

            //setInputs({value: value})
            setName(value)
        }, [value]);

    

    return (
        <div>
            <InputGroup className="mb-3">
                <InputGroup.Text>{nameLabel}</InputGroup.Text>
                <Form.Control
                    id={nameLabel}
                    onChange={(e) => {
                    setValue(e.target.value)
                }}/>
            </InputGroup>
        </div>
    )
}
