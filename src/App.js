import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Home } from "./pages/Home";
import { Detail } from "./pages/Detail";
import { Header } from "./components/Header";

import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const handleTheme = (e) =>
    e.target.checked ? setTheme("dark") : setTheme("light");
  return (
    <Router>
      <div className="app" data-theme={theme}>
        <Header handleTheme={handleTheme} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/detail/:characterId" component={Detail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
