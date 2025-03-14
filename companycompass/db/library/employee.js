const connection = require('../db/connection');

class Employee {
  // View all employees
  viewAll() {
    return connection.promise().query(
      `SELECT 
        e.id, 
        e.first_name, 
        e.last_name, 
        r.title, 
        d.name AS department,
        r.salary, 
        CONCAT(m.first_name, ' ', m.last_name) AS manager
      FROM employee e
      LEFT JOIN role r ON e.role_id = r.id
      LEFT JOIN department d ON r.department_id = d.id
      LEFT JOIN employee m ON e.manager_id = m.id
      ORDER BY e.id;`
    );
  }

  // Add an employee
  add(employee) {
    return connection.promise().query(
      'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);',
      [employee.firstName, employee.lastName, employee.roleId, employee.managerId]
    );
  }

  // Update an employee's role
  updateRole(employeeId, roleId) {
    return connection.promise().query(
      'UPDATE employee SET role_id = ? WHERE id = ?;',
      [roleId, employeeId]
    );
  }

  // Get all employees (for choices in prompts)
  getAllForPrompt() {
    return connection.promise().query(
      `SELECT 
        id AS value, 
        CONCAT(first_name, ' ', last_name) AS name 
      FROM employee 
      ORDER BY last_name, first_name;`
    );
  }

  // Get all managers (for choices in prompts)
  getAllManagersForPrompt() {
    // Returns all employees as potential managers, plus a "None" option
    return connection.promise().query(
      `SELECT 
        id AS value, 
        CONCAT(first_name, ' ', last_name) AS name 
      FROM employee 
      ORDER BY last_name, first_name;`
    ).then(([managers]) => {
      managers.unshift({ value: null, name: 'None' });
      return [managers];
    });
  }
}

module.exports = new Employee();