<?php

require_once(__DIR__ ."/../core/Database.php");
require_once(__DIR__ ."/../domain/Product.php");

class ProductModel
{
    public function getAllProducts(): array
    {

        $conn = Database::getConnection();
        $statement = $conn->query("select * from products", \PDO::FETCH_ASSOC);

        $products = [];
        foreach ($statement as $row) {
            $products[] = new Product(
                $row["SKU"],
                $row["NAME"],
                $row["PRICE"],
                $row["PRODUCT_TYPE"],
                $row["PRODUCT_SPECIFIC"]
            );
        }
        return $products;
    }

    public function createProduct(Product $product): void
    {

        $conn = Database::getConnection();

        $data = [
            'sku' => $product->getSku(),
            'name' => $product->getName(),
            'price' => $product->getPrice(),
            'product_type' => $product->getProductType(),
            'product_specific' => $product->getProductSpecific(),
        ];

        $sql = "INSERT INTO products (sku, name, price, product_type, product_specific) 
            VALUES (:sku, :name, :price, :product_type, :product_specific)";
        $statement = $conn->prepare($sql);  
        $res = $statement->execute($data);


    }

    public function deleteProducts($sku): void
    {

        $conn = Database::getConnection();

        $data = [
            'sku' => $sku
        ];

        $sql = "DELETE from products WHERE sku= :sku;";
        $statement = $conn->prepare($sql);  
        $res = $statement->execute($data);


    }

}


//differenza query e prepare stmt
/**
 * PDO prepare fa una validazione. 
 * check: 
 *  :sku
 * 
 * 
 */