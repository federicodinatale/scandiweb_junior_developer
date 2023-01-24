<?php 

require_once(__DIR__ ."/model/ProductModel.php");
require_once(__DIR__ ."/controller/ProductController.php");
require_once(__DIR__ ."/core/Router.php");

$productModel = new ProductModel();
$productController = new ProductController($productModel);

// register routes
$router = new Router();
$router->registerRoute("GET", "/products", $productController, "getProducts");
$router->registerRoute("POST", "/products", $productController, "createProduct");

//000webhostapp does not access delete request, therefore I had to use a POST request.
$router->registerRoute("POST", "/products/delete", $productController, "deleteProducts");

$router->handleRequest();



?>