import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Movie from "./components/Movie";
import NotFound from "./components/NotFound";

import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <Router>
    <Header />

     <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/:movieId' component={Movie} />
      <Route component={NotFound} />
    </Switch>

    <GlobalStyle />
  </Router>
);

export default App;
