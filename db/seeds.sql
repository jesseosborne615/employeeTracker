INSERT INTO department (name)
VALUES ('Customer Service'),
       ('EVPs'),
       ('Zookeepers'),
       ('Dentists');

INSERT INTO role (title, salary, department_id)
VALUES ('Customer Service Worker', 10000000, 1),
       ('Executive Vice President', 1200000, 2),
       ('Animal Handler', 2000000, 3),
       ('Tooth Doctor', 30000000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Jesse', 'Osborne', 1, 2),
       ('Kelly', 'Kapowski', 2, 3),
       ('Stone Cold', 'Steve Austin', 3, 4),
       ('Master', 'Splinter', 4, 5)