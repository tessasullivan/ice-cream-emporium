import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import IceCream from "./components/IceCreamMain/IceCream";
// import IceCreamImage from "./components/IceCreamImage";
import IceCreamForm from "./components/IceCreamForm/IceCreamForm";
import NavBar from "./components/NavBar/navBar";
import Employees from "./components/Employees/employees";

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
            <Redirect from="/" exact to="/flavors" />
            {/* <Redirect to="/not-found" /> */}
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
