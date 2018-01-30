create database persona;
use persona;

create table persona(
	id int(10) not null auto_increment,
	name varchar(30) not null,
	lastname varchar(30) not null,
	email varchar(30) not null,
	age int(10),
	birthday date(),
	primary key(id)
)ENGINE == INNODB;