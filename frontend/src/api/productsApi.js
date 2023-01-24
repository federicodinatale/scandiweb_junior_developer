import axios from 'axios';

const urlEndPoint = "https://federicodinatale.000webhostapp.com";
//const urlEndPoint = 'http://localhost:8888';

function createProducts(product) {
    try {
        axios
            .post(urlEndPoint + "/api/products", product)
            .then((response) => {
                //console.log(response);
            })
            .catch((response) => {

                console.log(response.response.status)
            });
    } catch (error) {
        console.log(error)
    }
}

function getProducts() {
    return axios.get(urlEndPoint + "/api/products");
}

function massDelete(deleteProduct) {

    axios
        .post(urlEndPoint + "/api/products/delete", {data: {
                deleteProduct
            }})
        .then(function (response) {
            //console.log(response.data);

        })
}
export default {
    createProducts,
    getProducts,
    massDelete
}
