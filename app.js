const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const employeeModule = require('./views/employeeModule'); // Import the employee module

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/employee', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'employee.html'));
});

app.post('/add', (req, res) => {
  const name = req.body.name;
  const salary = parseFloat(req.body.salary);
  const hours = parseFloat(req.body.hours);
  
  // Use the employee module to add an employee
  employeeModule.addEmployee(name, salary, hours);
  res.redirect('/employee');
});

app.get('/calculate', (req, res) => {
  // Use the employee module to calculate and display salaries
  const output = employeeModule.calculateSalaries();
  res.send(output.join('<br>'));
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
