import React from "react"
import Skills from "./skillsSection.js"
import Studies from "./studiesSection.js"
import Cases from "./casesSection.js"

class LandingPage extends React.Component {

  render() {
    return (
      <div className="landingPage">
        <div className="wrapper">
          <div className="aboutMeSection">
            <div className="aboutMeImage">
              <img src="./images/me.png" alt="Jeanette K Lindberg" />
            </div>
            <div className="aboutMeText">
              <h2>Jeanette Kalafatidis Lindberg</h2>
              <h1>FRONTEND DEVELOPER<br /><span>+</span> DIGITAL TREND ANALYST</h1>
              <p>I´m Jeanette. I stand on a sweet spot where the creation and understanding
              of digitization intersect.
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
             demos together with companies like Volumental, Bonnier, Comprend @ Technigo
            </p>
          </div>
          <div className="casesSection">
            <Cases />
          </div>
          <div className="skillsSection">
            <Skills />
          </div>
          <div className="studiesSection">
            <Studies />
          </div>
        </div>
        <div className="footer">
          <p>JEANETTE K LINDBERG</p>
          <p>aejlindberg@gmail.com</p>
          <p>+46 76 020 69 51</p>
        </div>
      </div>

    )
  }
}

export default LandingPage
