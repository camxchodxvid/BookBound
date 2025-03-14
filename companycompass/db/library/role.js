const connection = require('../db/connection');

class Role {
  // View all roles
  viewAll() {
    return connection.promise().query(
      `SELECT r.id, r.title, d.name AS department, r.salary 
       FROM role r
       LEFT JOIN department d ON r.department_id = d.id
       ORDER BY r.id;`
    );
  }

  // Add a role
  add(role) {
    return connection.promise().query(
      'INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);',
      [role.title, role.salary, role.departmentId]
    );
  }

  // Get all roles (for choices in prompts)
  getAllForPrompt() {
    return connection.promise().query(
      'SELECT id AS value, title AS name FROM role ORDER BY title;'
    );
  }
}

module.exports = new Role();