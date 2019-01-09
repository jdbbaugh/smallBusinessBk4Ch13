const dataSources = {
  getEmployees() {
    return fetch("http://localhost:8088/employees")
    .then(response => response.json())
  },
}

export default dataSources