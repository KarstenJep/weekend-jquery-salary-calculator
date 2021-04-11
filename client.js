let employeeSalary = [];
let totalMonthly = 0;

$(document).ready(onReady);

function onReady() {
    console.log('Hi jQuery');
    $('#submit').on('click', addEmployee);
    $('#outEmployee').on('click', '.delete', deleteEmployee);
}

function addEmployee() {
    console.log('adding employee');

    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        id: $('#id').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
    };
    employeeSalary.push(employee);
    console.log(employee.firstName, employee.id, employee.annualSalary);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    displayEmployee(employee.firstName, employee.lastName, employee.id, employee.title, employee.annualSalary);
}   
    
function displayEmployee(firstName, lastName, id, title, annualSalary) {
    console.log('in displayEmployee', firstName);
    let outEmployee = $('#outEmployee');
    outEmployee.empty();
    for ( let person of employeeSalary){
        console.log('in for loop');
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
    addSalary(annualSalary);
}

function addSalary(annualSalary) {
    console.log('in addSalary');
    totalMonthly += Number(annualSalary);
    let tM = $('#totalMonthly');
    tM.empty();
    tM.append(totalMonthly);
    if (totalMonthly > 20000) {
        console.log('in if');
        tM.append(`<p id="red"></p>`)
    }
}

function deleteEmployee() {
    console.log('delete employee');
    $(this).closest('tr').remove();
}
