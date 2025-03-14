const inquirer = require('inquirer');
const department = require('./department');
const role = require('./role');
const employee = require('./employee');

// Main menu prompt
const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        { name: 'View all departments', value: 'VIEW_DEPARTMENTS' },
        { name: 'View all roles', value: 'VIEW_ROLES' },
        { name: 'View all employees', value: 'VIEW_EMPLOYEES' },
        { name: 'Add a department', value: 'ADD_DEPARTMENT' },
        { name: 'Add a role', value: 'ADD_ROLE' },
        { name: 'Add an employee', value: 'ADD_EMPLOYEE' },
        { name: 'Update an employee role', value: 'UPDATE_EMPLOYEE_ROLE' },
        { name: 'Exit', value: 'EXIT' }
      ]
    }
  ]);

  return action;
};

// Add department prompt
const addDepartmentPrompt = async () => {
  const { name } = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the department?',
      validate: input => input ? true : 'Department name cannot be empty.'
    }
  ]);

  return name;
};

// Add role prompt
const addRolePrompt = async () => {
  // Get departments for choices
  const [departments] = await department.getAllForPrompt();

  const role = await inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the role?',
      validate: input => input ? true : 'Role title cannot be empty.'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'What is the salary for this role?',
      validate: input => {
        const salary = parseFloat(input);
        return !isNaN(salary) && salary > 0 ? true : 'Please enter a valid salary.';
      }
    },
    {
      type: 'list',
      name: 'departmentId',
      message: 'Which department does this role belong to?',
      choices: departments
    }
  ]);

  return role;
};

// Add employee prompt
const addEmployeePrompt = async () => {
  // Get roles for choices
  const [roles] = await role.getAllForPrompt();
  
  // Get managers for choices
  const [managers] = await employee.getAllManagersForPrompt();

  const newEmployee = await inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: "What is the employee's first name?",
      validate: input => input ? true : 'First name cannot be empty.'
    },
    {
      type: 'input',
      name: 'lastName',
      message: "What is the employee's last name?",
      validate: input => input ? true : 'Last name cannot be empty.'
    },
    {
      type: 'list',
      name: 'roleId',
      message: "What is the employee's role?",
      choices: roles
    },
    {
      type: 'list',
      name: 'managerId',
      message: "Who is the employee's manager?",
      choices: managers
    }
  ]);

  return newEmployee;
};

// Update employee role prompt
const updateEmployeeRolePrompt = async () => {
  // Get employees for choices
  const [employees] = await employee.getAllForPrompt();
  
  // Get roles for choices
  const [roles] = await role.getAllForPrompt();

  const update = await inquirer.prompt([
    {
      type: 'list',
      name: 'employeeId',
      message: 'Which employee would you like to update?',
      choices: employees
    },
    {
      type: 'list',
      name: 'roleId',
      message: 'What is their new role?',
      choices: roles
    }
  ]);

  return update;
};

module.exports = {
  mainMenu,
  addDepartmentPrompt,
  addRolePrompt,
  addEmployeePrompt,
  updateEmployeeRolePrompt
};