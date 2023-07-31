const cTable = require("console.table")
const inquirer = require("inquirer")
const { handlers } = require("./lib")

const initializeApp = async () => {
    const openingChoices = [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add department',
        'Add role',
        'Add employee',
        'Update employee role',
    ]}