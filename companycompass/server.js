const inquirer = require('inquirer');
require('console.table');

// Import modules
const connection = require('./db/connection');
const department = require('./lib/department');
const role = require('./lib/role');
const employee = require('./lib/employee');
const prompts = require('./lib/prompts');

// Application initialization
async function init() {
  console.log('\n');
  console.log('==================================');
  console.log('|                                |');
  console.log('|      EMPLOYEE MANAGER          |');
  console.log('|                                |');
  console.log('==================================');
  console.log('\n');
  
  let exit = false;

  while (!exit) {
    // Display main menu
    const action = await prompts.mainMenu();

    switch (action) {
      // View all departments
      case 'VIEW_DEPARTMENTS':
        await viewAllDepartments();
        break;
      
      // View all roles
      case 'VIEW_ROLES':
        await viewAllRoles();
        break;
      
      // View all employees
      case 'VIEW_EMPLOYEES':
        await viewAllEmployees();
        break;
      
      // Add a department
      case 'ADD_DEPARTMENT':
        await addDepartment();
        break;
      
      // Add a role
      case 'ADD_ROLE':
        await addRole();
        break;
      
      // Add an employee
      case 'ADD_EMPLOYEE':
        await addEmployee();
        break;
      
      // Update an employee role
      case 'UPDATE_EMPLOYEE_ROLE':
        await updateEmployeeRole();
        break;
      
      // Exit application
      case 'EXIT':
        exit = true;
        console.log('Goodbye!');
        connection.end();
        break;
    }
  }
}

// View all departments
async function viewAllDepartments() {
  try {
    const [departments] = await department.viewAll();
    console.log('\n');
    console.table(departments);
  } catch (err) {
    console.error('Error viewing departments:', err);
  }
}

// View all roles
async function viewAllRoles() {
  try {
    const [roles] = await role.viewAll();
    console.log('\n');
    console.table(roles);
  } catch (err) {
    console.error('Error viewing roles:', err);
  }
}

// View all employees
async function viewAllEmployees() {
  try {
    const [employees] = await employee.viewAll();
    console.log('\n');
    console.table(employees);
  } catch (err) {
    console.error('Error viewing employees:', err);
  }
}

// Add a department
async function addDepartment() {
  try {
    const departmentName = await prompts.addDepartmentPrompt();
    await department.add(departmentName);
    console.log(`\nAdded ${departmentName} to departments\n`);
  } catch (err) {
    console.error('Error adding department:', err);
  }
}

// Add a role
async function addRole() {
  try {
    const newRole = await prompts.addRolePrompt();
    await role.add(newRole);
    console.log(`\nAdded ${newRole.title} to roles\n`);
  } catch (err) {
    console.error('Error adding role:', err);
  }
}

// Add an employee
async function addEmployee() {
  try {
    const newEmployee = await prompts.addEmployeePrompt();
    await employee.add(newEmployee);
    console.log(`\nAdded ${newEmployee.firstName} ${newEmployee.lastName} to employees\n`);
  } catch (err) {
    console.error('Error adding employee:', err);
  }
}

// Update an employee role
async function updateEmployeeRole() {
  try {
    const { employeeId, roleId } = await prompts.updateEmployeeRolePrompt();
    await employee.updateRole(employeeId, roleId);
    console.log(`\nUpdated employee's role\n`);
  } catch (err) {
    console.error('Error updating employee role:', err);
  }
}

// Start the application
init();