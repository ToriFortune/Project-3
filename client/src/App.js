import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Patients from "./pages/Patients";
import Providers from "./pages/Providers";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import NavBar from "./component/NavBar";
import Landing from "./component/Landing";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/patients" component={Patients} />
          <Route exact path="/providers" component={Providers} />
          <Route exact path="/login" component={Login} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
