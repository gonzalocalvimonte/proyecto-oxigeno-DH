drop DATABASE if EXISTS oxigeno_db;

create database oxigeno_db;

use oxigeno_db;

CREATE TABLE categories (
  cat_id int(10) UNSIGNED NOT NULL,
  cat_name varchar(50) DEFAULT NULL,
  cat_description varchar(256) DEFAULT NULL,
  primary key(cat_id)
) ;

CREATE TABLE products (
  sku int(10) UNSIGNED NOT NULL,
  name varchar(64) NOT NULL,
  price int(10) NOT NULL,
  description varchar(2048) NOT NULL,
  image varchar(128) NOT NULL,
  category int(10) UNSIGNED Not NULL,
  primary key (sku),
  foreign key (category) references categories(cat_id)
) ;


CREATE TABLE roles (
  rol_id int(10) UNSIGNED NOT NULL,
  rol_nombre varchar(50) DEFAULT NULL,
  primary key (rol_id)
) ;


CREATE TABLE users (
  id int(10) UNSIGNED NOT NULL,
  nombre varchar(100) NOT NULL,
  apellido varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  nacimiento datetime NOT NULL,
  domicilio varchar(100) NOT NULL,
  avatar varchar(100) NOT NULL,
  rol int(10) UNSIGNED not NULL,
  primary key (id),
  foreign key (rol) references roles (rol_id)
) ;
