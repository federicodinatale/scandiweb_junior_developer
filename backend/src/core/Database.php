<?php

class Database
{

    private static $instance = null;

    public static function getConnection(): PDO
    {
        if (!self::$instance) {
            self::$instance = self::createConnection();
        }
        return self::$instance;
    }

    private static function createConnection(): PDO
    {
        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_DATABASE . ";port=" . DB_PORT;
        $db = new PDO($dsn, DB_USERNAME, DB_PASSWORD);
        if (DB_ERROR) {
            $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
        return $db;
    }
}
