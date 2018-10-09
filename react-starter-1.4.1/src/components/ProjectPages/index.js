import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import projectsJson from "../../techExp.json"

class Project extends React.Component {

state = {
  caseInView: projectsJson.cases[this.props.match.params.id - 1]
}
render() {
  return (
    <div className="projectPage">
      <a href="#">&#8592; BACK</a>
      <div className="projectImage">
        <img src="/images/techExp.jpg" alt="computer" />
      </div>
      <div className="projectText">
        <h1>Case {this.props.match.params.id} {this.state.caseInView.title}
        </h1>
        <p>{this.state.caseInView.description}</p>
      </div>
      <button>SEE IT LIVE</button>

      <div className="techSpecsSection">
        <h1>TECH SPECS</h1>
      </div>
      <div className="projectTechSpecs">
        <div className="techSpecs">
          <h2>CODE</h2>
          <p>HTML5</p>
          <p>CSS5</p>
          <p>JavaScript ES6</p>
          <p>React</p>
          <p>SASS</p>
          <p>GitHub</p>
          <p>Node.js</p>
        </div>
        <div className="techSpecs">
          <h2>TOOLBOX</h2>
          <p>Atom</p>
          <p>Postman</p>
          <p>Adobe Photoshop</p>
          <p>Slack</p>
        </div>
        <div className="techSpecs">
          <h2>MORE</h2>
          <p>Concept development</p>
          <p>Agile methodology</p>
        </div>
      </div>
      <div className="projectButton">
        <button>VIEW THE CODE</button>
      </div>
    </div>
  )
}
}

export default Project
