import React, { Component } from "react";
import "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./container/Layout/Navbar";
import Index from "./container/Layout/Index";
import Lyrics from "./container/Tracks/Lyrics";
import { Provider } from "./context";
//import Footer from "./container/Layout/Footer";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
