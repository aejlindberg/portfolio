import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

// import Tech from "./Tech"
import Skills from "./skillsSection.js"
import Studies from "./studiesSection.js"
import Cases from "./casesSection.js"
import Project from "./ProjectPages"
// const techExpJson = require("./../techExp.json")

class App extends React.Component {

  render() {
    return (
      <Router>
        <div className="landingPage">
          <div className="wrapper">
            <div className="aboutMeSection">
              <div className="aboutMeImage">
                <img src="/images/me.png" alt="Jeanette K Lindberg" />
              </div>
              <div className="aboutMeText">
                <h2>Jeanette Kalafatidis Lindberg</h2>
                <h1>FRONTEND DEVELOPER</h1>
                <p>Hello this is me! I am awsome and super duper
                mega smart and likes strawberries and ice cream.
                </p>
                <div className="aboutMeButton">
                  <button>SEE MY GITHUB</button>
                </div>
              </div>
            </div>

            <div className="techText">
              <h2>TECH</h2>
              <p>480 coding hours &bull; 50+ individual tasks &bull; HTML5, CSS, SASS, Flexbox,
               JavaScript, ES6, JSX, React, Node.js, Mongo DB, API:s &bull; 6 sprints with
               demos together with companies like Volumental, Bonnier, Comprend @ Technigo &bull;
               Exploring Machine Learning
              </p>
            </div>
            <div className="casesSection">
              <Cases />
              <Route path="/case1" component={Project} />
            </div>
            <div className="skillsSection">
              <Skills />
            </div>
            <div className="studiesSection">
              <Studies />
            </div>
          </div>
          <div className="footer">
            <p><strong>JEANETTE K LINDBERG</strong>
              <br />aejlindberg@gmail.com<br />
            +4676 020 69 51
            </p>
          </div>
        </div>
      </Router>

    )
  }
}

export default App
