let employeeSalary = [];

$(document).ready(onReady);

function onReady() {
    console.log('Hi jQuery');
    $('#submit').on('click', addEmployee);
 //   $('#outEmployee').on('click', '.delete', deleteEmployee);
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
                        <tr>
                            <td>${person.firstName}</td>
                            <td>${person.lastName}</td>
                            <td>${person.id}</td>
                            <td>${person.title}</td>
                            <td>${person.annualSalary}</td>
                            <td>
                            <button class="delete">Delete</button>
                            </td>
                        </tr>
        `)
    }
}
//     $('#outEmployee').empty(); // Clear out DOM

//      for (let i=0; i<newEmployee.length; i++){
//          console.log('in for loop');
         
//         $('#outEmployee').append(`
//             <tr>
//                     <td>${newEmployee[i].firstName}</td>
//                     <td>${newEmployee[i].lastName}</td>
//                     <td>${newEmployee[i].id}</td>
//                     <td>${newEmployee[i].title}</td>
//                     <td>${newEmployee[i].annualSalary}</td>
//                     <td>
//                         <button class="delete">Delete</button>
//                     </td>
//             </tr>
//          `)
//     }
// }