drop DATABASE if EXISTS oxigeno_db;

create database oxigeno_db;

use oxigeno_db;

CREATE TABLE categories (
  id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name varchar(50) NOT NULL,
  description varchar(256) NOT NULL,
  primary key(id)
) ;

CREATE TABLE products (
  sku int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name varchar(64) NOT NULL,
  price int(10) NOT NULL,
  description varchar(2048) NOT NULL,
  image varchar(128) NOT NULL,
  category int(10) UNSIGNED NOT NULL,
  primary key (sku),
  foreign key (category) references categories(id)
) ;


CREATE TABLE roles (
  id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre varchar(50) DEFAULT NULL,
  primary key (id)
) ;


CREATE TABLE users (
  id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  nombre varchar(100) NOT NULL,
  apellido varchar(100) NOT NULL,
  password varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  nacimiento datetime NOT NULL,
  domicilio varchar(100) NOT NULL,
  avatar varchar(100) NOT NULL,
  roleId int(10) UNSIGNED NOT NULL,
  primary key (id),
  foreign key (roleId) references roles (id)
) ;
