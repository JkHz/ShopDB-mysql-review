DROP DATABASE IF EXISTS ShopDB;

CREATE DATABASE ShopDB;

USE ShopDB;

CREATE TABLE inventory (
  id int auto_increment not null primary key,
  name varchar(255) not null,
  price int not null,
  quantity int not null
);