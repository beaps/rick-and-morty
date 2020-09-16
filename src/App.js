import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";

import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:characterId" component={Detail} />
      </Switch>
    </Router>
  );
}

export default App;
