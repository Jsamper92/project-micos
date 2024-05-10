import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ServicesDetail from "./pages/Services/ServicesDetail";
import Header from "./components/Header/Header";
import Footer from "./pages/Footer/Footer";
ReactDOM.render(
  <Router>
    <Header />

    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/servicios" component={ServicesDetail} />
    </Switch>
    <Footer />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
