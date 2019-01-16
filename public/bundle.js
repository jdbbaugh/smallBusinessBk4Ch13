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

var _employee = _interopRequireDefault(require("./employee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const domComponents = {
  createDomElement({
    elementType,
    content = null,
    cssClass,
    attributes = {}
  }) {
    const element = document.createElement(elementType);
    element.textContent = content;

    if (cssClass) {
      element.classList.add(cssClass);
    }

    for (let key in attributes) {
      element.setAttribute(key, attributes[key]);
    }

    return element;
  }

};
var _default = domComponents;
exports.default = _default;

},{"./employee":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dataSources = _interopRequireDefault(require("./dataSources"));

var _domComponents = _interopRequireDefault(require("./domComponents"));

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
    const targetContainer = document.querySelector(".output");
    employeeObject.forEach(employee => {
      const employeeContainer = _domComponents.default.createDomElement({
        elementType: "article",
        cssClass: "employee"
      });

      targetContainer.appendChild(employeeContainer);

      const employeeNameHeader = _domComponents.default.createDomElement({
        elementType: "header",
        cssClass: "employee__name"
      });

      employeeContainer.appendChild(employeeNameHeader);
      employeeNameHeader.appendChild(_domComponents.default.createDomElement({
        elementType: "h1",
        content: employee.name
      }));
      employeeContainer.appendChild(_domComponents.default.createDomElement({
        elementType: "section",
        content: employee.department,
        cssClass: "employee__department"
      }));
      employeeContainer.appendChild(_domComponents.default.createDomElement({
        elementType: "section",
        content: `Currently using a ${employee.computer}`
      }));
    }); //     <article class="employee">
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

};
var _default = employee;
exports.default = _default;

},{"./dataSources":1,"./domComponents":2}],4:[function(require,module,exports){
"use strict";

var _employee = _interopRequireDefault(require("./employee"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_employee.default.displayEmployed();

},{"./employee":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2RhdGFTb3VyY2VzLmpzIiwiLi4vc2NyaXB0cy9kb21Db21wb25lbnRzLmpzIiwiLi4vc2NyaXB0cy9lbXBsb3llZS5qcyIsIi4uL3NjcmlwdHMvbWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQ0FBLE1BQU0sV0FBVyxHQUFHO0FBQ2xCLEVBQUEsU0FBUyxFQUFFLENBQ1A7QUFDRSxpQkFBYSxDQURmO0FBRUUsb0JBQWdCLGdCQUZsQjtBQUdFLG9CQUFnQixDQUhsQjtBQUlFLGtCQUFjO0FBSmhCLEdBRE8sRUFPUDtBQUNFLGlCQUFhLENBRGY7QUFFRSxvQkFBZ0IsaUJBRmxCO0FBR0Usb0JBQWdCLENBSGxCO0FBSUUsa0JBQWM7QUFKaEIsR0FQTyxFQWFQO0FBQ0UsaUJBQWEsQ0FEZjtBQUVFLG9CQUFnQixVQUZsQjtBQUdFLG9CQUFnQixDQUhsQjtBQUlFLGtCQUFjO0FBSmhCLEdBYk8sRUFtQlA7QUFDRSxpQkFBYSxDQURmO0FBRUUsb0JBQWdCLGFBRmxCO0FBR0Usb0JBQWdCLENBSGxCO0FBSUUsa0JBQWM7QUFKaEIsR0FuQk8sQ0FETztBQTRCaEIsRUFBQSxXQUFXLEVBQUUsQ0FDWDtBQUNFLG9CQUFnQixDQURsQjtBQUVFLHNCQUFrQjtBQUZwQixHQURXLEVBS1g7QUFDRSxvQkFBZ0IsQ0FEbEI7QUFFRSxzQkFBa0I7QUFGcEIsR0FMVyxFQVNYO0FBQ0Usb0JBQWdCLENBRGxCO0FBRUUsc0JBQWtCO0FBRnBCLEdBVFcsRUFhWDtBQUNFLG9CQUFnQixDQURsQjtBQUVFLHNCQUFrQjtBQUZwQixHQWJXLEVBaUJYO0FBQ0Usb0JBQWdCLENBRGxCO0FBRUUsc0JBQWtCO0FBRnBCLEdBakJXLENBNUJHO0FBbURoQixFQUFBLFNBQVMsRUFBRSxDQUNUO0FBQ0Usa0JBQWMsQ0FEaEI7QUFFRSxvQkFBZ0I7QUFGbEIsR0FEUyxFQUtU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QkFBNUI7O0FBRUEsWUFBTSxrQkFBa0IsR0FBRyx1QkFBYyxnQkFBZCxDQUErQjtBQUN4RCxRQUFBLFdBQVcsRUFBRSxRQUQyQztBQUV4RCxRQUFBLFFBQVEsRUFBRTtBQUY4QyxPQUEvQixDQUEzQjs7QUFJQSxNQUFBLGlCQUFpQixDQUFDLFdBQWxCLENBQThCLGtCQUE5QjtBQUVBLE1BQUEsa0JBQWtCLENBQUMsV0FBbkIsQ0FBK0IsdUJBQWMsZ0JBQWQsQ0FBK0I7QUFDNUQsUUFBQSxXQUFXLEVBQUUsSUFEK0M7QUFFNUQsUUFBQSxPQUFPLEVBQUUsUUFBUSxDQUFDO0FBRjBDLE9BQS9CLENBQS9CO0FBSUEsTUFBQSxpQkFBaUIsQ0FBQyxXQUFsQixDQUE4Qix1QkFBYyxnQkFBZCxDQUErQjtBQUMzRCxRQUFBLFdBQVcsRUFBRSxTQUQ4QztBQUUzRCxRQUFBLE9BQU8sRUFBRSxRQUFRLENBQUMsVUFGeUM7QUFHM0QsUUFBQSxRQUFRLEVBQUU7QUFIaUQsT0FBL0IsQ0FBOUI7QUFLQSxNQUFBLGlCQUFpQixDQUFDLFdBQWxCLENBQThCLHVCQUFjLGdCQUFkLENBQStCO0FBQzNELFFBQUEsV0FBVyxFQUFFLFNBRDhDO0FBRTNELFFBQUEsT0FBTyxFQUFHLHFCQUFvQixRQUFRLENBQUMsUUFBUztBQUZXLE9BQS9CLENBQTlCO0FBSUQsS0ExQkQsRUFwQ2lCLENBZ0VyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0c7O0FBNUVjLENBQWpCO2VBK0VlLFE7Ozs7OztBQ2xGZjs7OztBQUVBLGtCQUFTLGVBQVQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBkYXRhU291cmNlcyA9IHtcbiAgZW1wbG95ZWVzOiBbXG4gICAgICB7XG4gICAgICAgIFwiZW1wbHllZUlkXCI6IDEsXG4gICAgICAgIFwiZW1wbG95ZWVOYW1lXCI6IFwiSGVybmFuZG8gU21pdGhcIixcbiAgICAgICAgXCJkZXBhcnRtZW50SWRcIjogMSxcbiAgICAgICAgXCJjb21wdXRlcklkXCI6IDRcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZW1wbHllZUlkXCI6IDIsXG4gICAgICAgIFwiZW1wbG95ZWVOYW1lXCI6IFwiSmVubnkgWmltbWVybWFuXCIsXG4gICAgICAgIFwiZGVwYXJ0bWVudElkXCI6IDMsXG4gICAgICAgIFwiY29tcHV0ZXJJZFwiOiAyXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImVtcGx5ZWVJZFwiOiAzLFxuICAgICAgICBcImVtcGxveWVlTmFtZVwiOiBcIkJvYiBIb3BlXCIsXG4gICAgICAgIFwiZGVwYXJ0bWVudElkXCI6IDIsXG4gICAgICAgIFwiY29tcHV0ZXJJZFwiOiAzXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImVtcGx5ZWVJZFwiOiA0LFxuICAgICAgICBcImVtcGxveWVlTmFtZVwiOiBcIkp1bGlhIEd1bGlhXCIsXG4gICAgICAgIFwiZGVwYXJ0bWVudElkXCI6IDUsXG4gICAgICAgIFwiY29tcHV0ZXJJZFwiOiAxXG4gICAgICB9LFxuICAgIF0sXG4gICAgXG4gICAgZGVwYXJ0bWVudHM6IFtcbiAgICAgIHtcbiAgICAgICAgXCJkZXBhcnRtZW50SWRcIjogMSxcbiAgICAgICAgXCJkZXBhcnRtZW50TmFtZVwiOiBcIkkuVC4gRGVwYXJ0bWVudFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImRlcGFydG1lbnRJZFwiOiAyLFxuICAgICAgICBcImRlcGFydG1lbnROYW1lXCI6IFwiTWFya2V0aW5nXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGVwYXJ0bWVudElkXCI6IDMsXG4gICAgICAgIFwiZGVwYXJ0bWVudE5hbWVcIjogXCJCbGFja01haWxpbmdcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJkZXBhcnRtZW50SWRcIjogNCxcbiAgICAgICAgXCJkZXBhcnRtZW50TmFtZVwiOiBcIkhpdG1hbiBEZXBhcnRtZW50XCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZGVwYXJ0bWVudElkXCI6IDUsXG4gICAgICAgIFwiZGVwYXJ0bWVudE5hbWVcIjogXCJDdXN0b21lciBTZXJ2aWNlXCJcbiAgICAgIH0sXG4gICAgXSxcbiAgICBcbiAgICBjb21wdXRlcnM6IFtcbiAgICAgIHtcbiAgICAgICAgXCJjb21wdXRlcklkXCI6IDEsXG4gICAgICAgIFwiY29tcHV0ZXJUeXBlXCI6IFwiQXBwbGUgTWFjQm9vayBQcm9cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJjb21wdXRlcklkXCI6IDIsXG4gICAgICAgIFwiY29tcHV0ZXJUeXBlXCI6IFwiTWNpbnRvc2ggU3VyZmFjZSBQcm9cIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJjb21wdXRlcklkXCI6IDMsXG4gICAgICAgIFwiY29tcHV0ZXJUeXBlXCI6IFwiQXRhcmkgMjYwMFwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImNvbXB1dGVySWRcIjogNCxcbiAgICAgICAgXCJjb21wdXRlclR5cGVcIjogXCJSYW5keSdzIGNhbGN1bGF0b3JcIlxuICAgICAgfSxcbiAgICBdfVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgZGF0YVNvdXJjZXMiLCJpbXBvcnQgZW1wbG95ZWUgZnJvbSBcIi4vZW1wbG95ZWVcIlxuXG5jb25zdCBkb21Db21wb25lbnRzID0ge1xuICBjcmVhdGVEb21FbGVtZW50KHsgZWxlbWVudFR5cGUsIGNvbnRlbnQgPSBudWxsLCBjc3NDbGFzcywgYXR0cmlidXRlcyA9IHt9IH0pIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50VHlwZSk7XG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgaWYgKGNzc0NsYXNzKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY3NzQ2xhc3MpO1xuICAgIH1cbiAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xuICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudDtcbiAgfVxuXG59XG5leHBvcnQgZGVmYXVsdCBkb21Db21wb25lbnRzIiwiaW1wb3J0IGRhdGFTb3VyY2VzIGZyb20gXCIuL2RhdGFTb3VyY2VzXCJcbmltcG9ydCBkb21Db21wb25lbnRzIGZyb20gXCIuL2RvbUNvbXBvbmVudHNcIjtcblxuY29uc3QgZW1wbG95ZWUgPSB7XG4gIGRpc3BsYXlFbXBsb3llZCAoKSB7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YVNvdXJjZXMuZW1wbG95ZWVzKTtcbiAgICBjb25zdCBlbXBsb3llZXMgPSBkYXRhU291cmNlcy5lbXBsb3llZXM7XG4gICAgY29uc3QgZGVwYXJ0bWVudHMgPSBkYXRhU291cmNlcy5kZXBhcnRtZW50cztcbiAgICBjb25zdCBjb21wdXRlcnMgPSBkYXRhU291cmNlcy5jb21wdXRlcnM7XG4gICAgbGV0IGVtcGxveWVlT2JqZWN0ID0gW107XG5cbiAgICBmb3IgKGxldCBpID0wOyBpIDwgZW1wbG95ZWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZW1wbG95ZWVOYW1lID0gZW1wbG95ZWVzW2ldLmVtcGxveWVlTmFtZTtcbiAgICAgIGxldCBkZXBhcnRtZW50SWQgPSBlbXBsb3llZXNbaV0uZGVwYXJ0bWVudElkO1xuICAgICAgbGV0IGNvbXB1dGVySWQgPSBlbXBsb3llZXNbaV0uY29tcHV0ZXJJZDtcblxuICAgICAgbGV0IGVtcGxveWVlRGVwdCA9IFwiXCJcbiAgICAgIGRlcGFydG1lbnRzLmZvckVhY2goZGVwdCA9PiB7XG4gICAgICAgIGlmIChkZXBhcnRtZW50SWQgPT09IGRlcHQuZGVwYXJ0bWVudElkKSB7XG4gICAgICAgICAgIGVtcGxveWVlRGVwdCA9IGRlcHQuZGVwYXJ0bWVudE5hbWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBsZXQgZW1wbG95ZWVDb21wID0gXCJcIlxuICAgICAgY29tcHV0ZXJzLmZvckVhY2goY29tcCA9PiB7XG4gICAgICAgIGlmIChjb21wdXRlcklkID09PSBjb21wLmNvbXB1dGVySWQpIHtcbiAgICAgICAgICBlbXBsb3llZUNvbXAgPSBjb21wLmNvbXB1dGVyVHlwZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZW1wbG95ZWVJbmZvID0ge1xuICAgICAgICBuYW1lOiBlbXBsb3llZU5hbWUsXG4gICAgICAgIGRlcGFydG1lbnQ6IGVtcGxveWVlRGVwdCxcbiAgICAgICAgY29tcHV0ZXI6IGVtcGxveWVlQ29tcFxuICAgICAgfVxuICAgICAgZW1wbG95ZWVPYmplY3QucHVzaChlbXBsb3llZUluZm8pXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGVtcGxveWVlT2JqZWN0KTtcblxuICAgIGNvbnN0IHRhcmdldENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3V0cHV0XCIpO1xuICAgIGVtcGxveWVlT2JqZWN0LmZvckVhY2goZW1wbG95ZWUgPT4ge1xuICAgICAgY29uc3QgZW1wbG95ZWVDb250YWluZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJhcnRpY2xlXCIsXG4gICAgICAgIGNzc0NsYXNzOiBcImVtcGxveWVlXCJcbiAgICAgIH0pXG4gICAgICB0YXJnZXRDb250YWluZXIuYXBwZW5kQ2hpbGQoZW1wbG95ZWVDb250YWluZXIpO1xuXG4gICAgICBjb25zdCBlbXBsb3llZU5hbWVIZWFkZXIgPSBkb21Db21wb25lbnRzLmNyZWF0ZURvbUVsZW1lbnQoe1xuICAgICAgICBlbGVtZW50VHlwZTogXCJoZWFkZXJcIixcbiAgICAgICAgY3NzQ2xhc3M6IFwiZW1wbG95ZWVfX25hbWVcIlxuICAgICAgfSlcbiAgICAgIGVtcGxveWVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGVtcGxveWVlTmFtZUhlYWRlcilcblxuICAgICAgZW1wbG95ZWVOYW1lSGVhZGVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcImgxXCIsXG4gICAgICAgIGNvbnRlbnQ6IGVtcGxveWVlLm5hbWVcbiAgICAgIH0pKVxuICAgICAgZW1wbG95ZWVDb250YWluZXIuYXBwZW5kQ2hpbGQoZG9tQ29tcG9uZW50cy5jcmVhdGVEb21FbGVtZW50KHtcbiAgICAgICAgZWxlbWVudFR5cGU6IFwic2VjdGlvblwiLFxuICAgICAgICBjb250ZW50OiBlbXBsb3llZS5kZXBhcnRtZW50LFxuICAgICAgICBjc3NDbGFzczogXCJlbXBsb3llZV9fZGVwYXJ0bWVudFwiXG4gICAgICB9KSlcbiAgICAgIGVtcGxveWVlQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvbUNvbXBvbmVudHMuY3JlYXRlRG9tRWxlbWVudCh7XG4gICAgICAgIGVsZW1lbnRUeXBlOiBcInNlY3Rpb25cIixcbiAgICAgICAgY29udGVudDogYEN1cnJlbnRseSB1c2luZyBhICR7ZW1wbG95ZWUuY29tcHV0ZXJ9YFxuICAgICAgfSkpXG4gICAgfSlcblxuLy8gICAgIDxhcnRpY2xlIGNsYXNzPVwiZW1wbG95ZWVcIj5cbi8vICAgICA8aGVhZGVyIGNsYXNzPVwiZW1wbG95ZWVfX25hbWVcIj5cbi8vICAgICAgICAgPGgxPlJhaW51IEl0dHljaGVyaWFoPC9oMT5cbi8vICAgICA8L2hlYWRlcj5cbi8vICAgICA8c2VjdGlvbiBjbGFzcz1cImVtcGxveWVlX19kZXBhcnRtZW50XCI+XG4vLyAgICAgICAgIFdvcmtzIGluIHRoZSBJVCBkZXBhcnRtZW50XG4vLyAgICAgPC9zZWN0aW9uPlxuLy8gICAgIDxzZWN0aW9uIGNsYXNzPVwiZW1wbG95ZWVfX2NvbXB1dGVyXCI+XG4vLyAgICAgICAgIEN1cnJlbnRseSB1c2luZyBhIDIwMTUgTWFjQm9vayBQcm9cbi8vICAgICA8L3NlY3Rpb24+XG4vLyA8L2FydGljbGU+XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZW1wbG95ZWUiLCJpbXBvcnQgZW1wbG95ZWUgZnJvbSBcIi4vZW1wbG95ZWVcIlxuXG5lbXBsb3llZS5kaXNwbGF5RW1wbG95ZWQoKSJdfQ==
