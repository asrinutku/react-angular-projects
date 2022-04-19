import React, { useEffect } from "react";
import { useState } from "react";
import EmployeeService from "../../services/EmployeeService";

const UpdateEmployee = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState(props.match.params.id);

  const changeFirstNameHandler = (event) => {
    setfirstName(event.target.value);
  };

  const changeLastNameHandler = (event) => {
    setlastName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  useEffect(() => {
    EmployeeService.getEmployeeById(id).then((res) => {
      let employee = res.data;
      setfirstName(employee.firstName);
      setlastName(employee.lastName);
      setEmail(employee.emailId);
    });
  }, [id]);

  const updateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: email,
    };

    EmployeeService.updateEmployee(employee, id).then((res) => {
      props.history.push("/employees");
    });

    console.log("employee =>" + JSON.stringify(employee));
  };

  const cancel = () => {
    props.history.push("/employees");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Update Employee</h3>
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label>İsim</label>
                  <input
                    placeholder="İsim"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Soyisim</label>
                  <input
                    placeholder="Soyisim"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    placeholder="Email"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={changeEmailHandler}
                  />
                </div>
                <button
                  className="btn btn-success m-3"
                  onClick={updateEmployee}
                >
                  Update
                </button>
                <button className="btn btn-danger" onClick={cancel}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;
