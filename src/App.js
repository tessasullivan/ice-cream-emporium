import React, { Component } from "react";
import { Route, Switch} from "react-router-dom";
import "./App.css";
import IceCream from "./components/IceCream";
// import IceCreamImage from "./components/IceCreamImage";
import IceCreamForm from "./components/IceCreamForm";
import StoreHeader from "./components/storeHeader";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <StoreHeader />
        <main className="container">
          <Switch>
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
