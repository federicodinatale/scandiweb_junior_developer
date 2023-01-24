import React from 'react'
import Form from 'react-bootstrap/Form';
import {ProductType} from '../ProductType';


const optionLabel = {
  "DVD": "DVD", "Book": "Book", "Furniture": "Furniture"
};

const ProductTypeSwitcher = ({setProductTypeSelected}) => {
  const onChange = (e) => {
    const type = e.target.value;
    setProductTypeSelected(type);
  };

  return <>
    <p>Type switcher</p>
    <Form.Select aria-label="" id="productType" onChange={onChange}>
      <option >Type Switcher</option>
      {ProductType.map(type => <option value={type} key={type}>{optionLabel[type]}</option>)}
    </Form.Select>
  </>
}

export default ProductTypeSwitcher;
