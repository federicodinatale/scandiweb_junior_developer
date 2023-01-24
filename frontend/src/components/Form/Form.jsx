import React, {useState, useEffect} from 'react'

import LabelName from '../LabelInput/LabelName';
import LabelSku from '../LabelInput/LabelSku';
import LabelPrice from '../LabelInput/LabelPrice';
import ProductTypeSpecificInput from '../ProductTypeSpecificInput/ProductTypeSpecificInput';
import ProductTypeSwitcher from '../ProductTypeSwitcher/ProductTypeSwitcher';

export default function FormContainer({setInputs}) {

    const [name,
        setName] = useState();
    const [sku,
        setSku] = useState();
    const [price,
        setPrice] = useState();
    const [productTypeSelected,
        setProductTypeSelected] = useState();

        const [productSpecific, setProductSpecific] = useState();

    useEffect(() => {
        setInputs({sku: sku, name: name, price: price, productType: productTypeSelected, productSpecific: productSpecific})
    }, [sku, name, price, productTypeSelected, productSpecific]);

    return (
        <div>
            <LabelSku nameLabel="sku" setInputs={setInputs} setSku={setSku}/>
            <LabelName nameLabel="name" setInputs={setInputs} setName={setName}/>
            <LabelPrice nameLabel="price" setInputs={setInputs} setPrice={setPrice}/>

            <ProductTypeSwitcher setProductTypeSelected={setProductTypeSelected}/>
            <ProductTypeSpecificInput
                productTypeSelected={productTypeSelected}
                setInputs={setInputs} setProductSpecific={setProductSpecific}/>
        </div>

    )
}
