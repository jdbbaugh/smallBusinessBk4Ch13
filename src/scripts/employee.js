import dataSources from "./dataSources"
import domComponents from "./domComponents";

const employee = {
  displayEmployed () {
    // console.log(dataSources.employees);
    const employees = dataSources.employees;
    const departments = dataSources.departments;
    const computers = dataSources.computers;
    let employeeObject = [];

    for (let i =0; i < employees.length; i++) {
      let employeeName = employees[i].employeeName;
      let departmentId = employees[i].departmentId;
      let computerId = employees[i].computerId;

      let employeeDept = ""
      departments.forEach(dept => {
        if (departmentId === dept.departmentId) {
           employeeDept = dept.departmentName;
        }
      });

      let employeeComp = ""
      computers.forEach(comp => {
        if (computerId === comp.computerId) {
          employeeComp = comp.computerType
        }
      });

      const employeeInfo = {
        name: employeeName,
        department: employeeDept,
        computer: employeeComp
      }
      employeeObject.push(employeeInfo)
    }
    console.log(employeeObject);

    const targetContainer = document.querySelector(".output");
    employeeObject.forEach(employee => {
      const employeeContainer = domComponents.createDomElement({
        elementType: "article",
        cssClass: "employee"
      })
      targetContainer.appendChild(employeeContainer);

      const employeeNameHeader = domComponents.createDomElement({
        elementType: "header",
        cssClass: "employee__name"
      })
      employeeContainer.appendChild(employeeNameHeader)

      employeeNameHeader.appendChild(domComponents.createDomElement({
        elementType: "h1",
        content: employee.name
      }))
      employeeContainer.appendChild(domComponents.createDomElement({
        elementType: "section",
        content: employee.department,
        cssClass: "employee__department"
      }))
      employeeContainer.appendChild(domComponents.createDomElement({
        elementType: "section",
        content: `Currently using a ${employee.computer}`
      }))
    })

//     <article class="employee">
//     <header class="employee__name">
//         <h1>Rainu Ittycheriah</h1>
//     </header>
//     <section class="employee__department">
//         Works in the IT department
//     </section>
//     <section class="employee__computer">
//         Currently using a 2015 MacBook Pro
//     </section>
// </article>
  }
}

export default employee