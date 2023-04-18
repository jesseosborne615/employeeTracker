const mysql = require('mysql2');
const inquirer = require('inquirer');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_tracker'
});
// connection.connect((err)=>{
//     if(err) throw err;
//     console.log('You are connected on ' + connection.threadId)
// })

function start(){
    inquirer.prompt([
        {
        type: 'list',
        name: 'home',
        message: 'What would you like to view?',
        choices: [
            'View all departments',
            'View all roles',
            'View all employees',
            'Add a department',
            'Add a role',
            'Add an employee',
            'Update an employee role',
            'Exit'
    ],
},      
])
.then(({ home }) => {
    switch (home) {
        case 'View all departments':
            viewDepartments();
            return;
            
            case 'View all roles':
                viewRoles();
                return;
                
            case 'View all employees':
                viewEmployees();
                return;

                case 'Add a department':
                    addDepartment();
                    return;

                    case 'Add a role':
                        addRole();
                        return;

                        case 'Add an employee':
                            addEmployee();
                            return;
    }
    });
}

function viewDepartments(){
    db.query('SELECT * FROM department', (err, res) => {
        if(err) throw err;
        console.table(res);
        start();
    });
}

function viewRoles(){
    db.query('SELECT * FROM role', (err, res) => {
        if(err) throw err;
        console.table(res);
        start();
    });
}

function viewEmployees(){
    db.query('SELECT * FROM employee', (err, res) => {
        if(err) throw err;
        console.table(res);
        start();
    });
}

start();

function addDepartment(){
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: 'What is the name of the department?',
        },
    ])
   .then(({ name }) => {
    db.query('INSERT INTO department SET?', { name: name }, (err, res) => {
        if(err) throw err;
        console.table(res);
        start();
    });
   })
}
    function addRole(){
        inquirer.prompt([
            {
            type: 'input',
            name: 'title',
            message: 'What is the title of the role?',
            },
            {
            type: 'input',
            name:'salary',
            message: 'What is the salary of the role?',
            },
            {
            type: 'input',
            name: 'department_id',
            message: 'What is the department ID of the role?',
            },
        ])
      .then(({ title, salary, department_id }) => {
        db.query('INSERT INTO role SET?', { title: title, salary: salary, department_id: department_id }, (err, res) => {
            if(err) throw err;
            console.table(res);
            start();
        });
    })
}

function addEmployee(){
    inquirer.prompt([
        {
        type: 'input',
        name: 'first_name',
        message: 'What is the first name of the employee?',
        },
        {
        type: 'input',
        name: 'last_name',
        message: 'What is the last name of the employee?',
        },
        {
        type: 'input',
        name: 'role_id',
        message: 'What is the role ID of the employee?',
        },
        {
        type: 'input',
        name:'manager_id',
        message: 'What is the manager ID of the employee?',
        },
    ])
  .then(({ first_name, last_name, role_id, manager_id }) => {
    db.query('INSERT INTO employee SET?', { first_name: first_name, last_name: last_name, role_id: role_id, manager_id: manager_id }, (err, res) => {
        if(err) throw err;
        console.table(res);
        start();
    });
})
}