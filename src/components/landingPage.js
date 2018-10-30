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
              <div className="aboutMeName">
                <h2>Jeanette Kalafatidis Lindberg</h2>
              </div>
              <h1>Frontend Developer<br /><span>+</span> Digital Trend Analyst</h1>
              <p>I´m Jeanette, a curious and creative web developer with a passion
              for understanding "why". With more than 7 years’ experience of analysis
              within the tech area, I am standing on an inspiring spot where the creation
              and understanding of digitization intersect.<br /><br />As a web developer
              I am intrigued by the possibilities to create amazing solutions for people.
              </p>
              <div className="aboutMeButton">
                <div className="linkedinButton">
                  <a href="https://www.linkedin.com/in/jeanette-k-lindberg/" target="_blank">
                  <button>
                    <img src="./images/linkedinLogo.png" alt="LinkedIn" />
                    SEE MY LINKEDIN
                  </button></a>
                </div>
                <div className="githubButton">
                  <a href="https://github.com/aejlindberg" target="_blank">
                  <button>
                    <img src="./images/githubLogo.png" alt="GitHub" />
                    SEE MY GITHUB</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="techText">
            <h2>Tech</h2>
            <p>480 coding hours <span>&bull;</span> 50+ individual tasks <span>&bull;</span> HTML5, CSS, SASS, Flexbox,
             CSS-grid, JavaScript ES6, JSX, React, Node.js, MongoDb, API:s <span>&bull;</span> 6 sprints with
             demos together with companies like Volumental, Bonnier News, Comprend, Svenska Spel, Fyndiq <span>@</span> Technigo
            </p>
          </div>
          <div className="casesSection">
            <Cases />
          </div>
          <div className="githubButton">
            <a href="https://github.com/aejlindberg?tab=repositories" target="_blank">
            <button>
              <img src="./images/githubLogo.png" alt="GitHub" />
              SEE MORE PROJECTS
            </button>
            </a>
          </div>
          <div className="skillsSection">
            <Skills />
          </div>
          <div className="studiesSection">
            <Studies />
          </div>
          <div className="workSection">
            <h2>Work</h2>
            <div className="workText">
              <p>With more than 7 years’ experience of analysis with technology as the main field of interest, I have
              gathered major insights of the ongoing transformation of the digitized world. <br /><br />I have been in the management
              team for larger multi-client projects, which has given me an in-depth understanding of where the forces of digitalization
              is taking us, and I have published multiple articles on the subject. <br /><br />As a web developer I am intrigued
              by the opportunity to contribute to this transformation and the possibilities to create amazing solutions
              for people. <br />Visit my LinkedIn to learn more about my experiences.</p>
            </div>
            <div className="linkedinButton">
              <a href="https://www.linkedin.com/in/jeanette-k-lindberg/" target="_blank">
              <button>
                <img src="./images/linkedinLogo.png" alt="LinkedIn" />
                SEE MY LINKEDIN
              </button></a>
            </div>
          </div>
        </div>
        <div className="footer">
          <p><strong>Jeanette Kalafatidis Lindberg</strong></p>
          <p>aejlindberg@gmail.com</p>
          <p>+46 76 020 69 51</p>
        </div>
      </div>

    )
  }
}

export default LandingPage
