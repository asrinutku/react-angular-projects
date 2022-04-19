import React from "react";
import { useState } from "react";
import EmployeeService from "../../services/EmployeeService";

const AddEmployee = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");

  const changeFirstNameHandler = (event) => {
    setfirstName(event.target.value);
  };

  const changeLastNameHandler = (event) => {
    setlastName(event.target.value);
  };

  const changeEmailHandler = (event) => {
    setEmail(event.target.value);
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    let employee = {
      firstName: firstName,
      lastName: lastName,
      emailId: email,
    };

    console.log("employee =>" + JSON.stringify(employee));

    EmployeeService.addEmployee(employee).then((res) => {
      props.history.push("/employees");
    });
  };

  const cancel = () => {
    props.history.push("/employees");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h3 className="text-center">Çalışan Ekle</h3>
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
                <div>
                  <button
                    className="btn btn-success m-3"
                    onClick={saveEmployee}
                  >
                    Ekle
                  </button>
                  <button className="btn btn-danger" onClick={cancel}>
                    İptal Et
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
