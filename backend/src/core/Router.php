<?php
require_once(__DIR__ ."/../config.php");

class Router
{
    private $routes = [];

    public function handleRequest()
    {
        $currentMethod = $this->getCurrentMethod();
        $currentRoute = $this->getCurrentRoute();

        foreach ($this->routes as $route) {
            [$method, $path, $controller, $functionName] = $route;
            $currentPath = API_PREFIX . $path;

            if ($method === $currentMethod && $currentPath === $currentRoute) {
                call_user_func(array($controller, $functionName));
                return;
            }
        }
        $this->returnNotFound();
    }

    private function getCurrentRoute()
    {
        $uri = $_SERVER["REQUEST_URI"];
        $queryStringPos = strpos($uri, '?');
        return $queryStringPos ? substr($uri, 0, $queryStringPos) : $uri;
    }

    private function getCurrentMethod()
    {
        return $_SERVER["REQUEST_METHOD"];
    }

    public function registerRoute($method, $path, $controller, $functionName)
    {
        $this->routes[] = [$method, $path, $controller, $functionName];
    }

    private function returnNotFound()
    {
        header("Content-Type: application/json");
        http_response_code(404);
        $response = [
            "resultCode" => 404,
            "message" => "Not Found",
            "data" => []
        ];
        echo json_encode($response);
    }

}
