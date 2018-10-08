import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

// import Tech from "./Tech"
import LandingPage from "./landingPage.js"
import Project from "./ProjectPages"

// const techExpJson = require("./../techExp.json")

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact="true" component={LandingPage} />
          <Route path="/cases/:id" exact="true" component={Project} />
        </div>
      </Router>

    )
  }
}

export default App
