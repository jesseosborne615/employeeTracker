DROP DATABASE IF EXISTS employee_tracker;
CREATE DATABASE employee_tracker;
USE employee_tracker;

CREATE TABLE department (
    id int auto_increment,
    name varchar(30) not null,
    PRIMARY KEY (id)
)

CREATE TABLE role (
    id int auto_increment,
    PRIMARY KEY (id),
    title varchar(30) not null,
    salary decimal not null,
    department_id int not null,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
)

CREATE TABLE employee (
    id int auto_increment,
    PRIMARY KEY (id),
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id int not null,
    manager_id int,
    FOREIGN key (role_id)
    REFERENCES role(id)
)

