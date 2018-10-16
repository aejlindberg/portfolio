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
              <h1>Frontend Developer<br /><span>+</span> Digital Trend Analyst</h1>
              <p>I´m Jeanette, a curious and creative web developer with a thing for understanding "why". I stand on a spot where the creation and understanding
              of digitization intersect.
              </p>
              <div className="aboutMeButton">
                <a href="https://github.com/aejlindberg"><button>SEE MY GITHUB</button></a>
              </div>
            </div>
          </div>

          <div className="techText">
            <h2>Tech</h2>
            <p>480 coding hours &bull; 50+ individual tasks &bull; HTML5, CSS, SASS, Flexbox,
             JavaScript, ES6, JSX, React, Node.js, Mongo DB, API:s &bull; 6 sprints with
             demos together with companies like Volumental, Bonnier, Comprend, Svenska Spel @ Technigo
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
          <p><strong>Jeanette K Lindberg</strong></p>
          <p>aejlindberg@gmail.com</p>
          <p>+46 76 020 69 51</p>
        </div>
      </div>

    )
  }
}

export default LandingPage
