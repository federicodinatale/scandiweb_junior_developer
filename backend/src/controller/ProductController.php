<?php

require_once(__DIR__ ."/../model/ProductModel.php");
require_once(__DIR__ ."/../domain/Product.php");
require_once(__DIR__ ."/../controller/BaseController.php");

class ProductController extends BaseController
{
    private $model;

    public function __construct(ProductModel $model)
    {
        $this->model = $model;
    }

    public function getProducts()
    {
        try {
            $products = $this->model->getAllProducts();
            $this->renderData($products);

        } catch(\Exception $expection) {
            $this->renderError([], 400, "Create product failed");
        } 
        
    }

    public function createProduct()
    {
        $requestData = json_decode(file_get_contents('php://input'), true);
  
        $product = new Product(
            $requestData["sku"],
            $requestData["name"],
            $requestData["price"],
            $requestData["productType"],
            $requestData["productSpecific"]
        );


        try {
            $this->model->createProduct($product);
            $this->renderData([$product]);

        }catch(\Exception $expection) {
            $this->renderError([], 400, "Create product failed");
        }
      
    }

    public function deleteProducts()
    {
        $requestData = json_decode(file_get_contents('php://input'), true);

        try {

            for ($i=0; $i < count($requestData["data"]["deleteProduct"]); $i++)
            { 
                $this->model->deleteProducts($requestData["data"]["deleteProduct"][$i]);
            }

        }catch(\Exception $expection) {
            $this->renderError([], 400, "delete product failed");
        }


    }
}

