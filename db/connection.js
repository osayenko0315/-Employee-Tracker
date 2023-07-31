const mysql = require('mysql2')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'osayenko0315',
        database: 'employee_db'
    },
    console.log('connected to employee_db database')
)

module.exports = db