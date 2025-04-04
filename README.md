# CompanyCompass

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Description

CompanyCompass is a powerful command-line application designed to help business owners and managers efficiently view and manage their organizational structure. This intuitive interface streamlines the process of organizing departments, roles, and employees, making business planning and resource allocation more effective.

Built with MySQL and Node.js, CompanyCompass provides a robust solution for tracking organizational hierarchy, managing personnel data, and making data-driven decisions about team resources—all without the complexity of spreadsheets or the cost of enterprise HR software.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Database Schema](#database-schema)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contact](#contact)

## Installation

To install and set up CompanyCompass on your local machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/camxchodxvid/CompanyCompass.git
   ```

2. Navigate to the project directory:
   ```bash
   cd CompanyCompass
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Configure the database connection:
   - Open `db/connection.js`
   - Update the MySQL connection parameters with your credentials:
     ```javascript
     const connection = mysql.createConnection({
       host: 'localhost',
       user: 'your_mysql_username',
       password: 'your_mysql_password',
       database: 'employee_db'
     });
     ```

5. Set up the database schema and seed data:
   ```bash
   mysql -u root -p
   source db/schema.sql
   source db/seeds.sql
   exit
   ```

## Usage

Launch the application with:
```bash
npm start
```

The interactive menu allows you to:
- View all departments, roles, or employees
- Add a department, role, or employee
- Update employee roles and information

Simply follow the on-screen prompts to navigate through the available options.

## Features

- **Department Management**
  - View all departments with formatted tables showing names and IDs
  - Add new departments to the organization

- **Role Management**
  - View all roles with details including titles, IDs, departments, and salaries
  - Create new roles with customizable titles, salaries, and department assignments

- **Employee Management**
  - View comprehensive employee data including IDs, names, titles, departments, salaries, and reporting structure
  - Add new employees with full profile information
  - Update employee roles as organizational needs change

## Database Schema

The application is built on a relational MySQL database with the following structure:

**department**
  - `id`: INT PRIMARY KEY
  - `name`: VARCHAR(30)

**role**
  - `id`: INT PRIMARY KEY
  - `title`: VARCHAR(30)
  - `salary`: DECIMAL
  - `department_id`: INT (Foreign Key to department.id)

**employee**
  - `id`: INT PRIMARY KEY
  - `first_name`: VARCHAR(30)
  - `last_name`: VARCHAR(30)
  - `role_id`: INT (Foreign Key to role.id)
  - `manager_id`: INT (Foreign Key to employee.id, self-referencing)

## Technologies Used

- **Node.js** - JavaScript runtime environment
- **Inquirer.js** - Interactive command-line interface
- **MySQL2** - Database operations and management
- **console.table** - Formatted data presentation
- **JavaScript ES6+** - Modern programming features

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions, suggestions, or issues, please reach out:

- GitHub: [camxchodxvid](https://github.com/camxchodxvid)
- Email: dxvid2001@gmail.com
