import React from "react"
import Tech from "./Tech"

const techExpJson = require("./../techExp.json")

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">

        <div className="aboutMeSection">
          <div className="aboutMeImage">
            <img src="me.png" alt="Jeanette K Lindberg" />
          </div>
          <div className="aboutMeText">
            <h2>Jeanette Kalafatidis Lindberg</h2>
            <h1>FRONTEND DEVELOPER</h1>
            <p>Hello this is me! I am awsome and super duper mega smart and likes strawberries.</p>
            <div className="aboutMeButton">
              <button>SEE MY GITHUB</button>
            </div>
          </div>
        </div>

        <div className="techText">
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
              description={experience.description}/>
          }
          )}
        </div>

        <div className="skillsSection">
          <div className="skills">
            <h2>CODE</h2>
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
            <h2>TOOLBOX</h2>
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
            <h2>MORE</h2>
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

        <div className="studiesSection">
          <div className="studies">
            <h2>FRONTEND DEVELOPER</h2>
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
            <h2>JAVASCRIPT</h2>
            <p>3 day intensive course in JavaScript. Build a
            newsite with Google News API.
            </p>
            <br />
            <p>Visby Sep. 2018</p>
          </div>
          <div className="studies">
            <h2>HTML AND CSS</h2>
            <p>Online Course. Build a webpage in HTML & CSS.
            </p>
            <br />
            <p>Sthlm Feb. 2018</p>
          </div>
          <div className="studies">
            <h2>WORDPRESS</h2>
            <p>Introduction to WordPress.
            </p>
            <br />
            <p>Sthlm Feb. 2014</p>
          </div>
          <div className="studies">
            <h2>MASTER IN SOCIAL ANTHROPOLOGY</h2>
            <p>5 years at Stockholm University.
            </p>
            <br />
            <p>Sthlm Sep. 2005-Sep. 2010</p>
          </div>
          <div className="studies">
            <button>SEE MY LINKEDIN</button>
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
