import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import "./App.css";
import IceCream from "./components/IceCreamMain/IceCream";
// import IceCreamImage from "./components/IceCreamImage";
import IceCreamForm from "./components/IceCreamForm/IceCreamForm";
import NavBar from "./components/NavBar/navBar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar/>
        <main className="container">
          <Switch>
            {/* <Route path="/employees" render={props => (

            )} */}
            <Route path="/add" component={IceCreamForm} />
            <Route path="/" component={IceCream} />
          </Switch>
          {/* <IceCreamImage/> */}
        </main>
      </React.Fragment>
    );
  }
}

export default App;
