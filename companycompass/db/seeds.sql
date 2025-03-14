USE employee_db;

INSERT INTO department (name)
VALUES 
  ('Engineering'),
  ('Finance'),
  ('Legal'),
  ('Sales'),
  ('Marketing');

INSERT INTO role (title, salary, department_id)
VALUES
  ('Software Engineer', 85000, 1),
  ('Lead Engineer', 125000, 1),
  ('Accountant', 75000, 2),
  ('Finance Manager', 120000, 2),
  ('Lawyer', 95000, 3),
  ('Legal Team Lead', 130000, 3),
  ('Sales Representative', 65000, 4),
  ('Sales Manager', 100000, 4),
  ('Marketing Specialist', 70000, 5),
  ('Marketing Director', 110000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('John', 'Doe', 2, NULL),
  ('Jane', 'Smith', 1, 1),
  ('Mike', 'Johnson', 4, NULL),
  ('Sarah', 'Williams', 3, 3),
  ('David', 'Brown', 6, NULL),
  ('Emily', 'Davis', 5, 5),
  ('Robert', 'Miller', 8, NULL),
  ('Jennifer', 'Wilson', 7, 7),
  ('Michael', 'Moore', 10, NULL),
  ('Lisa', 'Taylor', 9, 9);