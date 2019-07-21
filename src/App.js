import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import IceCream from './components/iceCreamMain/iceCream';
import IceCreamForm from "./components/iceCreamForm/iceCreamForm";
import NavBar from "./components/navBar/navBar";
import Error404 from "./components/error404";
import Employees from "./components/employees/employees";

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
