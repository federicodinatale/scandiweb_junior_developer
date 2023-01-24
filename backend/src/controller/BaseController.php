<?php

abstract class BaseController
{

    public function renderData($data = [], $resultCode = 200, $message = null, $encodeOptions = 0)
    {
        $this->renderJson($data, $resultCode, $message, $encodeOptions);
    }

    public function renderError($data = [], $resultCode = 500, $message = "Internal server error", $encodeOptions = 0)
    {
        $this->renderJson($data, $resultCode, $message, $encodeOptions);
    }

    private function renderJson($data, $resultCode, $message, $encodeOptions)
    {
        header("Content-Type: application/json");
        http_response_code($resultCode);
        $response = [
            "resultCode" => $resultCode,
            "message" => $message,
            "data" => $data
        ];
        echo json_encode($response, $encodeOptions);
    }
}
