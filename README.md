# Employee-Tracker
## User Store
As a business owner, it would be helpful to be able to view and manage the departments, roles, and employees in your company and organize and plan your business. Employee Tracker is here to help you keep everything organized and updated. The ability to find what you're looking for is right at your fingertips, all in one simple command prompt application.

## Acceptance Criteria

GIVEN a command-line application that accepts user input
WHEN I start the application
THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
WHEN I choose to view all departments
THEN I am presented with a formatted table showing department names and department ids
WHEN I choose to view all roles
THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
WHEN I choose to view all employees
THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database
WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 

## Installation
* Use the MySQL NPM package to connect to your MySQL database and perform queries.

* npm install

* Use InquirerJs NPM package to interact with the user via the command-line.

* npm install mysql inquirer

* Use console.table to print MySQL rows to the console. There is a built-in version of console.table, but the NPM package formats the data a little better for our purposes.

* npm install console.table --save

## Tech Used
* inquirer
* mySQL
* console.table
* Javascript
* Node.js
