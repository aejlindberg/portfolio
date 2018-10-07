import React from "react"
import Tech from "./Tech"

const techExpJson = require("./../techExp.json")

class App extends React.Component {

  render() {
    return (
      <div className="landingPage">
        <div className="wrapper">
          <div className="aboutMeSection">
            <div className="aboutMeImage">
              <img src="me.png" alt="Jeanette K Lindberg" />
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
          <div className="techSection">
            {techExpJson.experiences.map((experience) => {
              return <Tech
                key={experience.key}
                title={experience.title}
                image={experience.image}
                description={experience.description} />
            }
            )}
          </div>

          <div className="skillsSection">
            <h2>SKILLS</h2>
            <div className="skillsColumns">
              <div className="skills">
                <p><strong>CODE</strong></p>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>JavaScript ES6</p>
                <p>React</p>
                <p>SASS</p>
                <p>GitHub</p>
                <p>Node.js</p>
                <p>MongoDB</p>
              </div>
              <div className="skills">
                <p><strong>TOOLBOX</strong></p>
                <p>ATOM</p>
                <p>Postman</p>
                <p>Adobe Photoshop</p>
                <p>Adobe InDesign</p>
                <p>Adobe Illustrator</p>
                <p>Microsoft Office</p>
                <p>Keynote</p>
                <p>Slack</p>
              </div>
              <div className="skills">
                <p><strong>MORE</strong></p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
                <p>xxx</p>
              </div>
            </div>
          </div>

          <div className="studiesSection">
            <h2>STUDIES</h2>
            <div className="studiesColumns">
              <div className="studies">
                <p><strong>FRONTEND DEVELOPER</strong></p>
                <p>Full-time 12 w boot camp / intensive program.
                Covering everything from the basics of programming
                to how to structure and build bigger web projects.
                Focus on JavaScript. Total 480 coding hours, 50 +
                individual tasks (in HTML5, CSS, JavaScript, JSX,
                React, Node.js) and 6 sprints with demos together
                with companies like Volumental, Bonnier News and
                Comprend.
                </p>
                <br />
                <p>Sthlm Sep.-Nov. 2018</p>
              </div>
              <div className="studies">
                <p><strong>JAVASCRIPT</strong></p>
                <p>3 day intensive course in JavaScript. Build a
                newsite with Google News API.
                </p>
                <br />
                <p>Visby Sep. 2018</p>
              </div>
              <div className="studies">
                <p><strong>HTML AND CSS</strong></p>
                <p>Online Course. Build a webpage in HTML & CSS.
                </p>
                <br />
                <p>Sthlm Feb. 2018</p>
              </div>
              <div className="studies">
                <p><strong>WORDPRESS</strong></p>
                <p>Introduction to WordPress.
                </p>
                <br />
                <p>Sthlm Feb. 2014</p>
              </div>
              <div className="studies">
                <p><strong>MASTER IN SOCIAL ANTHROPOLOGY</strong></p>
                <p>5 years at Stockholm University.
                </p>
                <br />
                <p>Sthlm Sep. 2005-Sep. 2010</p>
              </div>
              <div className="studiesButton">
                <button>SEE MY LINKEDIN</button>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <p><strong>JEANETTE K LINDBERG</strong>
            <br />aejlindberg@gmail.com<br />
          +4676 020 69 51
          </p>
        </div>
      </div>

    )
  }

}

export default App
