import dataSources from "./dataSources"

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
    console.log(employeeObject)
  }
}

export default employee