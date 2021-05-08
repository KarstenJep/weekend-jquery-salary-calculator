let employeeSalary = []; // array for data storage
let totalMonthly = 0; // variable for displaying running total of salary inputs

$(document).ready(onReady); // calling jQuery

function onReady() { // setting up button functionality
    // TEST - console.log('Hi jQuery');
    $('#submit').on('click', addEmployee);
    $('#outEmployee').on('click', '.delete', deleteEmployee);
}

function addEmployee() {
    // TEST - console.log('adding employee');
    let employee = { // putting employee info into a object
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),             // I could set up a class to clear all inputs at once $('.emptyinput').val('');
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
    };
    employeeSalary.push(employee); // pushing employee object into data storage array
    // TEST - console.log(employee.firstName, employee.id, employee.annualSalary);
    $('#firstName').val('');    
    $('#lastName').val(''); 
    $('#id').val('');           // Clearing all inputs
    $('#title').val('');
    $('#annualSalary').val('');
    displayEmployee(employee.firstName, // Calling DOM display function with employee inputs
                    employee.lastName,  // Do I need input arguments, or could loop access directly?
                    employee.id, 
                    employee.title, 
                    employee.annualSalary);
}   
    
function displayEmployee(firstName, lastName, id, title, annualSalary) {
    // TEST - console.log('in displayEmployee', firstName);
    let outEmployee = $('#outEmployee'); // creating variable for calling id
    outEmployee.empty(); // empty DOM
    for ( let person of employeeSalary){ // loop to append variable and display on DOM
        // TEST - console.log('in for loop');
        outEmployee.append(`
                        <tr bordercolor="black">
                            <td>${person.firstName}</td>
                            <td>${person.lastName}</td>
                            <td>${person.id}</td>
                            <td>${person.title}</td>
                            <td>$${person.annualSalary}</td>
                            <td>
                            <button class="delete">Delete</button>
                            </td>
                        </tr>
        `)
    }
    addSalary(annualSalary); // Calling salary calculator function
}

function addSalary(annualSalary) { 
    // TEST - console.log('in addSalary');
    Number(annualSalary /= 12); // divide annual salaries into monthly
    totalMonthly += annualSalary; // add monthly employee salaries
    let tM = $('#totalMonthly'); // creating variable for calling id
    tM.empty(); // empty DOM
    tM.append('$', totalMonthly); // Display on DOM
    if (totalMonthly > 20000) { // Creating red background alert if salaries exceed budget
        // TEST - console.log('in if');
        tM.css('background-color', 'red'); // could use .addClass(cite a css class)
    }
}

function deleteEmployee() { // deletes entry off DOM when button clicked
    // TEST - console.log('delete employee');
    $(this).closest('tr').remove();
}
