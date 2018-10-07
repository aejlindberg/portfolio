import React from "react"
import Tech from "./Tech"

const techExpJson = require("./../techExp.json")

class App extends React.Component {

  render() {
    return (
      <div className="wrapper">

        <div className="aboutMe">
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
          <p>480 coding hours - 50+ individual tasks - HTML5, CSS, SASS, Flexbox,
           JavaScript, ES6, JSX, React, Node.js, Mongo DB, API:s - 6 sprints with
           demos together with companies like Volumental, Bonnier, Comprend @ Technigo -
           Exploring Machine Learning
          </p>
        </div>
        <div className="techGrid">
          {techExpJson.experiences.map((experience) => {
            return <Tech
              key={experience.key}
              title={experience.title}
              image={experience.image}
              description={experience.description}/>
          }
          )}
        </div>
      </div>
    )
  }

}

export default App
