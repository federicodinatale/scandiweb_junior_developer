<?php

class Product implements \JsonSerializable
{
    private $sku;
    private $name;
    private $price;
    private $productType;
    private $productSpecific;

    public function __construct(string $sku, string $name, float $price, string $productType, string $productSpecific)
    {
        $this->sku = $sku;
        $this->name = $name;
        $this->price = $price;
        $this->productType = $productType;
        $this->productSpecific = $productSpecific;
    }

    /**
     * @return string
     */
    public function getSku(): string
    {
        return $this->sku;
    }

    /**
     * @param string $sku
     */
    public function setSku(string $sku): void
    {
        $this->sku = $sku;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }

    /**
     * @param float $price
     */
    public function setPrice(float $price): void
    {
        $this->price = $price;
    }

    /**
     * @return string
     */
    public function getProductType(): string
    {
        return $this->productType;
    }

    /**
     * @param string $productType
     */
    public function setProductType(string $productType): void
    {
        $this->productType = $productType;
    }

    /**
     * @return string
     */
    public function getProductSpecific(): string
    {
        return $this->productSpecific;
    }

    /**
     * @param string $productSpecific
     */
    public function setProductSpecific(string $productSpecific): void
    {
        $this->productSpecific = $productSpecific;
    }


    public function jsonSerialize(): array
    {
        return get_object_vars($this);
    }

    public function __toString()
    {
        return json_encode($this);
    }
}
