create database burgers_db;

use burgers_db;

create table burgers(
    id int not null auto_increment primary key,
    burger_name varchar(255),
    devoured boolean not null default 0
);