const connection = require('../db/connection');

class Department {
  // View all departments
  viewAll() {
    return connection.promise().query(
      'SELECT id, name FROM department ORDER BY id;'
    );
  }

  // Add a department
  add(departmentName) {
    return connection.promise().query(
      'INSERT INTO department (name) VALUES (?);',
      departmentName
    );
  }

  getAllForPrompt() {
    return connection.promise().query(
      'SELECT id AS value, name FROM department ORDER BY name;'
    );
  }
}

module.exports = new Department();