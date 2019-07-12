import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import IceCream from "./components/IceCreamMain/IceCream";
import IceCreamForm from "./components/IceCreamForm/IceCreamForm";
import NavBar from "./components/NavBar/navBar";
import Employees from "./components/Employees/employees";
import Error404 from "./components/Error404";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route
              path="/employees"
              render={props => (
                <Employees currentRouterPath={props.location.pathname} />
              )}
            />
            <Route path="/flavors/:id" component={IceCreamForm} />
            <Route path="/flavors" component={IceCream} />
            <Redirect from="/patrons" to="/flavors" />
            <Redirect from="/" exact to="/flavors" />
            <Route component={Error404}/>
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
