let employees = JSON.parse(localStorage.getItem('employees')) || [];
let employeeId = 1;


function displayEmployees(){
    let listContainer = document.getElementById("list-container");
    listContainer.innerHTML = '';
 
    if(employees.length === 0){
      listContainer.innerHTML = `<p class="data-not-found">Data not found</p>`
      return;
    }
    
    employees.forEach(employee => {
        const employeeDiv = document.createElement("div");
        employeeDiv.classList.add("emp-entry");
        employeeDiv.innerHTML = ` <div class="list_box">
                                  <div class="emp-container">
                                   <p>${employee.name}</p>
                                   <p>${employee.profession}</p>
                                   <p>${employee.age}</p>
                                  </div>
            <button class="delete-btn" onclick="deleteEmployee(${employee.id})">Delete</button>
            </div>`;

        listContainer.appendChild(employeeDiv);
    })
}

const display = document.getElementById("add-user");
display.addEventListener('click',(event)=>{
    event.preventDefault();
    const name = document.getElementById("employee").value.trim();
    const profession = document.getElementById("profession").value.trim();
    const age = document.getElementById("age").value.trim();
    const messageBox = document.getElementById('msg');


     if(!name || !profession || !age){
        messageBox.innerHTML = `<span class ="error-msg">Error :Please Make sure All the field before adding in an employee</span> `;
        return;
     }

     const newEmployee = {
        id: employeeId++,
        name,
        profession,
        age: parseInt(age,10) 
     }
     employees.push(newEmployee);

     localStorage.setItem('employees', JSON.stringify(employees));

     messageBox.innerHTML = `<span class="success-msg">Success : Message Added</span>`;
     

    document.getElementById('employee').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
     
    displayEmployees();
   console.log(employees,employeeId);
})

function deleteEmployee(id){
   employees = employees.filter(employee => employee.id !== id);
   localStorage.setItem('employees', JSON.stringify(employees));
   displayEmployees();
   console.log(employees);

}
displayEmployees();