import React from "react"
import { HashRouter as Router, Route } from "react-router-dom"

// import Tech from "./Tech"
import LandingPage from "./landingPage.js"
import Project from "./ProjectPages"

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
