DROP DATABASE IF EXISTS social_network;

CREATE DATABASE IF NOT EXISTS social_network;

USE social_network;

CREATE TABLE publicaciones(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    contenido TEXT NOT NULL,
    fecha_publicacion timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);