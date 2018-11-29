import React, { Component } from "react";
// import logo from "./logo.svg";
import "./assets/styles/_index.scss";
import { Main, About, Contacts, Edu, Family, Blog, Store } from "./components";
import { Mentor, Resident } from "./components/Forms";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./routes/Sidebar/Sidebar.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "",
        number: 0,
        email: "",
        information: ""
      }
    };
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Sidebar />
          <div className="components">
            <Route path="/" exact component={Main} />
            <Route path="/about/" component={About} />
            <Route path="/blog/" component={Blog} />
            <Route path="/contacts/" component={Contacts} />
            <Route path="/edu/" component={Edu} />
            <Route path="/family/" component={Family} />
            <Route path="/mentor/form/" component={Mentor} />
            <Route path="/store/" component={Store} />
            <Route path="/resident/form/" component={Resident} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
