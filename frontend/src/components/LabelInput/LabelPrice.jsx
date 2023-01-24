import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

export default function LabelPrice({nameLabel, setPrice}) {

    const [value,
        setValue] = useState('');

        useEffect(() => {
  
            for (let i = 0; i < value.length; i ++) {

            if (!/[0-9,.]/.test(value[i]))
            {
                setPrice("notNumber");
                break;
            } else {
                setPrice(Number(value.replace(",", ".")))
            }
        }
          
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
