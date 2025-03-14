# CompanyCompass

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

CompanyCompass is a powerful command-line application that helps business owners and managers view and manage departments, roles, and employees in their company. This intuitive interface allows for organizing and planning business operations efficiently. Built with MySQL and Node.js, it provides a straightforward solution for tracking organizational structure, managing personnel data, and making informed decisions about team resources—all without the need for complex spreadsheets or expensive HR software.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Questions](#questions)

## Installation

To install and set up CompanyCompass on your local machine, follow these steps:

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/camxchodxvid/CompanyCompass.git
   ```

2. Navigate to the project directory:
   ```
   cd CompanyCompass
   ```

3. Install the required dependencies:
   ```
   npm install
   ```

4. Configure the database connection:
   - Open `db/connection.js`
   - Modify the MySQL connection parameters with your credentials:
     ```javascript
     const connection = mysql.createConnection({
       host: 'localhost',
       user: 'your_mysql_username',
       password: 'your_mysql_password',
       database: 'employee_db'
     });
     ```

5. Set up the database schema and seed data:
   - Start MySQL in your terminal:
     ```
     mysql -u root -p
     ```
   - Once logged in to MySQL, run:
     ```
     source db/schema.sql
     source db/seeds.sql
     ```
   - Exit MySQL:
     ```
     exit
     ```

## Usage

To start the application, run:
```
npm start
```

The application will present you with a menu of options to:
- View all departments, roles, or employees
- Add a department, role, or employee
- Update an employee's role

Follow the on-screen prompts to navigate through the application.

## Features

- **View Departments**: Display a formatted table showing department names and IDs
- **View Roles**: Display job titles, role IDs, departments, and salaries
- **View Employees**: Display employee data including IDs, names, job titles, departments, salaries, and managers
- **Add Department**: Create a new department in the database
- **Add Role**: Create a new role with title, salary, and department
- **Add Employee**: Create a new employee record with name, role, and manager
- **Update Employee Role**: Change an employee's job role

## Database Schema

The application uses a MySQL database with the following structure:

- **department**
  - id: INT PRIMARY KEY
  - name: VARCHAR(30)

- **role**
  - id: INT PRIMARY KEY
  - title: VARCHAR(30)
  - salary: DECIMAL
  - department_id: INT (Foreign Key to department.id)

- **employee**
  - id: INT PRIMARY KEY
  - first_name: VARCHAR(30)
  - last_name: VARCHAR(30)
  - role_id: INT (Foreign Key to role.id)
  - manager_id: INT (Foreign Key to employee.id, self-referencing)


## Technologies Used

- Node.js
- Inquirer.js (for command-line prompts)
- MySQL2 (for database operations)
- console.table (for formatted table output)
- JavaScript ES6+

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Questions

If you have any questions or issues, please contact:

GitHub: [camxchodxvid](https://github.com/camxchodxvid)
