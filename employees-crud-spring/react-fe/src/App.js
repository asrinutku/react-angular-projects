import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListOfEmployees from "./components/ListOfEmployees";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

function App() {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={ListOfEmployees}></Route>
              <Route path="/employees" component={ListOfEmployees}></Route>
              <Route path="/add-employee" component={AddEmployee}></Route>
              <Route path="/update-employee/:id" component={UpdateEmployee}></Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
