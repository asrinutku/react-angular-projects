import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

export default class ListOfEmployees extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };

    this.addEmployee = this.addEmployee.bind(this);
    this.editEmployee = this.editEmployee.bind(this);
  }

  componentDidMount() {
    EmployeeService.getEmployees().then((res) => {
      this.setState({ employees: res.data });
    });
  }

  addEmployee() {
    this.props.history.push("/add-employee");
  }

  editEmployee(id) {
    this.props.history.push(`/update-employee/${id}`);
  }

  

  render() {
    return (
      <div>
        <h2 className="text-center m-2">Employees List</h2>

        <button className="btn btn-primary mt-5" onClick={this.addEmployee}>
          Add Employee
        </button>

        <div className="row mt-5">
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>İsim</th>
                <th>Soyisim</th>
                <th>Email</th>
                <th>Eylemler</th>
              </tr>
            </thead>

            <tbody>
              {this.state.employees.map((employee) => (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.editEmployee(employee.id);
                      }}
                      className="btn btn-info"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => {
                        this.deleteEmployee(employee.id);
                      }}
                      className="btn btn-danger"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
