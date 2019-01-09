(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const dataSources = {
  employees: [{
    "emplyeeId": 1,
    "employeeName": "Hernando Smith",
    "departmentId": 1,
    "computerId": 4
  }, {
    "emplyeeId": 2,
    "employeeName": "Jenny Zimmerman",
    "departmentId": 3,
    "computerId": 2
  }, {
    "emplyeeId": 3,
    "employeeName": "Bob Hope",
    "departmentId": 2,
    "computerId": 3
  }, {
    "emplyeeId": 4,
    "employeeName": "Julia Gulia",
    "departmentId": 5,
    "computerId": 1
  }],
  departments: [{
    "departmentId": 1,
    "departmentName": "I.T. Department"
  }, {
    "departmentId": 2,
    "departmentName": "Marketing"
  }, {
    "departmentId": 3,
    "departmentName": "BlackMailing"
  }, {
    "departmentId": 4,
    "departmentName": "Hitman Department"
  }, {
    "departmentId": 5,
    "departmentName": "Customer Service"
  }],
  computers: [{
    "computerId": 1,
    "computerType": "Apple MacBook Pro"
  }, {
    "computerId": 2,
    "computerType": "Mcintosh Surface Pro"
  }, {
    "computerId": 3,
    "computerType": "Atari 2600"
  }, {
    "computerId": 4,
    "computerType": "Randy's calculator"
  }]
};
var _default = dataSources;
exports.default = _default;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataSources = _interopRequireDefault(require("./dataSources"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const employee = {
  displayEmployed() {
    // console.log(dataSources.employees);
    const employees = _dataSources.default.employees;
    const departments = _dataSources.default.departments;
    const computers = _dataSources.default.computers;
    let employeeObject = [];

    for (let i = 0; i < employees.length; i++) {
      let employeeName = employees[i].employeeName;
      let departmentId = employees[i].departmentId;
      let computerId = employees[i].computerId;
      let employeeDept = "";
      departments.forEach(dept => {
        if (departmentId === dept.departmentId) {
          employeeDept = dept.departmentName;
        }
      });
      let employeeComp = "";
      computers.forEach(comp => {
        if (computerId === comp.computerId) {
          employeeComp = comp.computerType;
        }
      });
      const employeeInfo = {
        name: employeeName,
        department: employeeDept,
        computer: employeeComp
      };
      employeeObject.push(employeeInfo);
    }

    console.log(employeeObject);
  }

};
var _default = employee;
exports.default = _default;

},{"./dataSources":1}],3:[function(require,module,exports){
"use strict";

var _employee = _interopRequireDefault(require("./employee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_employee.default.displayEmployed();

},{"./employee":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGFTb3VyY2VzLmpzIiwiLi4vc2NyaXB0cy9lbXBsb3llZS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQU0sV0FBVyxHQUFHO0FBQ2xCLEVBQUEsU0FBUyxFQUFFLENBQ1A7QUFDRSxpQkFBYSxDQURmO0FBRUUsb0JBQWdCLGdCQUZsQjtBQUdFLG9CQUFnQixDQUhsQjtBQUlFLGtCQUFjO0FBSmhCLEdBRE8sRUFPUDtBQUNFLGlCQUFhLENBRGY7QUFFRSxvQkFBZ0IsaUJBRmxCO0FBR0Usb0JBQWdCLENBSGxCO0FBSUUsa0JBQWM7QUFKaEIsR0FQTyxFQWFQO0FBQ0UsaUJBQWEsQ0FEZjtBQUVFLG9CQUFnQixVQUZsQjtBQUdFLG9CQUFnQixDQUhsQjtBQUlFLGtCQUFjO0FBSmhCLEdBYk8sRUFtQlA7QUFDRSxpQkFBYSxDQURmO0FBRUUsb0JBQWdCLGFBRmxCO0FBR0Usb0JBQWdCLENBSGxCO0FBSUUsa0JBQWM7QUFKaEIsR0FuQk8sQ0FETztBQTRCaEIsRUFBQSxXQUFXLEVBQUUsQ0FDWDtBQUNFLG9CQUFnQixDQURsQjtBQUVFLHNCQUFrQjtBQUZwQixHQURXLEVBS1g7QUFDRSxvQkFBZ0IsQ0FEbEI7QUFFRSxzQkFBa0I7QUFGcEIsR0FMVyxFQVNYO0FBQ0Usb0JBQWdCLENBRGxCO0FBRUUsc0JBQWtCO0FBRnBCLEdBVFcsRUFhWDtBQUNFLG9CQUFnQixDQURsQjtBQUVFLHNCQUFrQjtBQUZwQixHQWJXLEVBaUJYO0FBQ0Usb0JBQWdCLENBRGxCO0FBRUUsc0JBQWtCO0FBRnBCLEdBakJXLENBNUJHO0FBbURoQixFQUFBLFNBQVMsRUFBRSxDQUNUO0FBQ0Usa0JBQWMsQ0FEaEI7QUFFRSxvQkFBZ0I7QUFGbEIsR0FEUyxFQUtUO0FBQ0Usa0JBQWMsQ0FEaEI7QUFFRSxvQkFBZ0I7QUFGbEIsR0FMUyxFQVNUO0FBQ0Usa0JBQWMsQ0FEaEI7QUFFRSxvQkFBZ0I7QUFGbEIsR0FUUyxFQWFUO0FBQ0Usa0JBQWMsQ0FEaEI7QUFFRSxvQkFBZ0I7QUFGbEIsR0FiUztBQW5ESyxDQUFwQjtlQXNFbUIsVzs7Ozs7Ozs7Ozs7QUN0RW5COzs7O0FBRUEsTUFBTSxRQUFRLEdBQUc7QUFDZixFQUFBLGVBQWUsR0FBSTtBQUNqQjtBQUNBLFVBQU0sU0FBUyxHQUFHLHFCQUFZLFNBQTlCO0FBQ0EsVUFBTSxXQUFXLEdBQUcscUJBQVksV0FBaEM7QUFDQSxVQUFNLFNBQVMsR0FBRyxxQkFBWSxTQUE5QjtBQUNBLFFBQUksY0FBYyxHQUFHLEVBQXJCOztBQUVBLFNBQUssSUFBSSxDQUFDLEdBQUUsQ0FBWixFQUFlLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBN0IsRUFBcUMsQ0FBQyxFQUF0QyxFQUEwQztBQUN4QyxVQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWEsWUFBaEM7QUFDQSxVQUFJLFlBQVksR0FBRyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWEsWUFBaEM7QUFDQSxVQUFJLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBRCxDQUFULENBQWEsVUFBOUI7QUFFQSxVQUFJLFlBQVksR0FBRyxFQUFuQjtBQUNBLE1BQUEsV0FBVyxDQUFDLE9BQVosQ0FBb0IsSUFBSSxJQUFJO0FBQzFCLFlBQUksWUFBWSxLQUFLLElBQUksQ0FBQyxZQUExQixFQUF3QztBQUNyQyxVQUFBLFlBQVksR0FBRyxJQUFJLENBQUMsY0FBcEI7QUFDRjtBQUNGLE9BSkQ7QUFNQSxVQUFJLFlBQVksR0FBRyxFQUFuQjtBQUNBLE1BQUEsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsSUFBSSxJQUFJO0FBQ3hCLFlBQUksVUFBVSxLQUFLLElBQUksQ0FBQyxVQUF4QixFQUFvQztBQUNsQyxVQUFBLFlBQVksR0FBRyxJQUFJLENBQUMsWUFBcEI7QUFDRDtBQUNGLE9BSkQ7QUFNQSxZQUFNLFlBQVksR0FBRztBQUNuQixRQUFBLElBQUksRUFBRSxZQURhO0FBRW5CLFFBQUEsVUFBVSxFQUFFLFlBRk87QUFHbkIsUUFBQSxRQUFRLEVBQUU7QUFIUyxPQUFyQjtBQUtBLE1BQUEsY0FBYyxDQUFDLElBQWYsQ0FBb0IsWUFBcEI7QUFDRDs7QUFDRCxJQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksY0FBWjtBQUNEOztBQW5DYyxDQUFqQjtlQXNDZSxROzs7Ozs7QUN4Q2Y7Ozs7QUFFQSxrQkFBUyxlQUFUIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY29uc3QgZGF0YVNvdXJjZXMgPSB7XG4gIGVtcGxveWVlczogW1xuICAgICAge1xuICAgICAgICBcImVtcGx5ZWVJZFwiOiAxLFxuICAgICAgICBcImVtcGxveWVlTmFtZVwiOiBcIkhlcm5hbmRvIFNtaXRoXCIsXG4gICAgICAgIFwiZGVwYXJ0bWVudElkXCI6IDEsXG4gICAgICAgIFwiY29tcHV0ZXJJZFwiOiA0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImVtcGx5ZWVJZFwiOiAyLFxuICAgICAgICBcImVtcGxveWVlTmFtZVwiOiBcIkplbm55IFppbW1lcm1hblwiLFxuICAgICAgICBcImRlcGFydG1lbnRJZFwiOiAzLFxuICAgICAgICBcImNvbXB1dGVySWRcIjogMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJlbXBseWVlSWRcIjogMyxcbiAgICAgICAgXCJlbXBsb3llZU5hbWVcIjogXCJCb2IgSG9wZVwiLFxuICAgICAgICBcImRlcGFydG1lbnRJZFwiOiAyLFxuICAgICAgICBcImNvbXB1dGVySWRcIjogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJlbXBseWVlSWRcIjogNCxcbiAgICAgICAgXCJlbXBsb3llZU5hbWVcIjogXCJKdWxpYSBHdWxpYVwiLFxuICAgICAgICBcImRlcGFydG1lbnRJZFwiOiA1LFxuICAgICAgICBcImNvbXB1dGVySWRcIjogMVxuICAgICAgfSxcbiAgICBdLFxuICAgIFxuICAgIGRlcGFydG1lbnRzOiBbXG4gICAgICB7XG4gICAgICAgIFwiZGVwYXJ0bWVudElkXCI6IDEsXG4gICAgICAgIFwiZGVwYXJ0bWVudE5hbWVcIjogXCJJLlQuIERlcGFydG1lbnRcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkZXBhcnRtZW50SWRcIjogMixcbiAgICAgICAgXCJkZXBhcnRtZW50TmFtZVwiOiBcIk1hcmtldGluZ1wiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRlcGFydG1lbnRJZFwiOiAzLFxuICAgICAgICBcImRlcGFydG1lbnROYW1lXCI6IFwiQmxhY2tNYWlsaW5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGVwYXJ0bWVudElkXCI6IDQsXG4gICAgICAgIFwiZGVwYXJ0bWVudE5hbWVcIjogXCJIaXRtYW4gRGVwYXJ0bWVudFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRlcGFydG1lbnRJZFwiOiA1LFxuICAgICAgICBcImRlcGFydG1lbnROYW1lXCI6IFwiQ3VzdG9tZXIgU2VydmljZVwiXG4gICAgICB9LFxuICAgIF0sXG4gICAgXG4gICAgY29tcHV0ZXJzOiBbXG4gICAgICB7XG4gICAgICAgIFwiY29tcHV0ZXJJZFwiOiAxLFxuICAgICAgICBcImNvbXB1dGVyVHlwZVwiOiBcIkFwcGxlIE1hY0Jvb2sgUHJvXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiY29tcHV0ZXJJZFwiOiAyLFxuICAgICAgICBcImNvbXB1dGVyVHlwZVwiOiBcIk1jaW50b3NoIFN1cmZhY2UgUHJvXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiY29tcHV0ZXJJZFwiOiAzLFxuICAgICAgICBcImNvbXB1dGVyVHlwZVwiOiBcIkF0YXJpIDI2MDBcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJjb21wdXRlcklkXCI6IDQsXG4gICAgICAgIFwiY29tcHV0ZXJUeXBlXCI6IFwiUmFuZHkncyBjYWxjdWxhdG9yXCJcbiAgICAgIH0sXG4gICAgXX1cblxuICAgIGV4cG9ydCBkZWZhdWx0IGRhdGFTb3VyY2VzIiwiaW1wb3J0IGRhdGFTb3VyY2VzIGZyb20gXCIuL2RhdGFTb3VyY2VzXCJcblxuY29uc3QgZW1wbG95ZWUgPSB7XG4gIGRpc3BsYXlFbXBsb3llZCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YVNvdXJjZXMuZW1wbG95ZWVzKTtcbiAgICBjb25zdCBlbXBsb3llZXMgPSBkYXRhU291cmNlcy5lbXBsb3llZXM7XG4gICAgY29uc3QgZGVwYXJ0bWVudHMgPSBkYXRhU291cmNlcy5kZXBhcnRtZW50cztcbiAgICBjb25zdCBjb21wdXRlcnMgPSBkYXRhU291cmNlcy5jb21wdXRlcnM7XG4gICAgbGV0IGVtcGxveWVlT2JqZWN0ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0wOyBpIDwgZW1wbG95ZWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZW1wbG95ZWVOYW1lID0gZW1wbG95ZWVzW2ldLmVtcGxveWVlTmFtZTtcbiAgICAgIGxldCBkZXBhcnRtZW50SWQgPSBlbXBsb3llZXNbaV0uZGVwYXJ0bWVudElkO1xuICAgICAgbGV0IGNvbXB1dGVySWQgPSBlbXBsb3llZXNbaV0uY29tcHV0ZXJJZDtcblxuICAgICAgbGV0IGVtcGxveWVlRGVwdCA9IFwiXCJcbiAgICAgIGRlcGFydG1lbnRzLmZvckVhY2goZGVwdCA9PiB7XG4gICAgICAgIGlmIChkZXBhcnRtZW50SWQgPT09IGRlcHQuZGVwYXJ0bWVudElkKSB7XG4gICAgICAgICAgIGVtcGxveWVlRGVwdCA9IGRlcHQuZGVwYXJ0bWVudE5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgZW1wbG95ZWVDb21wID0gXCJcIlxuICAgICAgY29tcHV0ZXJzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICAgIGlmIChjb21wdXRlcklkID09PSBjb21wLmNvbXB1dGVySWQpIHtcbiAgICAgICAgICBlbXBsb3llZUNvbXAgPSBjb21wLmNvbXB1dGVyVHlwZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZW1wbG95ZWVJbmZvID0ge1xuICAgICAgICBuYW1lOiBlbXBsb3llZU5hbWUsXG4gICAgICAgIGRlcGFydG1lbnQ6IGVtcGxveWVlRGVwdCxcbiAgICAgICAgY29tcHV0ZXI6IGVtcGxveWVlQ29tcFxuICAgICAgfVxuICAgICAgZW1wbG95ZWVPYmplY3QucHVzaChlbXBsb3llZUluZm8pXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGVtcGxveWVlT2JqZWN0KVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGVtcGxveWVlIiwiaW1wb3J0IGVtcGxveWVlIGZyb20gXCIuL2VtcGxveWVlXCJcblxuZW1wbG95ZWUuZGlzcGxheUVtcGxveWVkKCkiXX0=
