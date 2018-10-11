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
    <div className="casePage">
      <div className="wrapper">
        <Link to="/">&#8592; BACK</Link>
        <div className="caseImage">
          <img src={this.state.caseInView.image} alt="computer" />
        </div>
        <div className="caseDescription">
          <h1>{this.state.caseInView.title}
          </h1>
          <p>{this.state.caseInView.description}</p>
          <button>SEE IT LIVE</button>
        </div>

        <div className="techSpecsSection">
          <h1>TECH SPECS</h1>
        </div>
        <div className="techSection">
          <div className="techSpecs">
            <h3>CODE</h3>
            <p>HTML5</p>
            <p>CSS5</p>
            <p>JavaScript ES6</p>
            <p>React</p>
            <p>SASS</p>
            <p>GitHub</p>
            <p>Node.js</p>
          </div>
          <div className="techSpecs">
            <h3>TOOLBOX</h3>
            <p>Atom</p>
            <p>Postman</p>
            <p>Adobe Photoshop</p>
            <p>Slack</p>
          </div>
          <div className="techSpecs">
            <h3>MORE</h3>
            <p>Concept development</p>
            <p>Agile methodology</p>
          </div>
        </div>
        <div className="projectButton">
          <button>VIEW THE CODE</button>
        </div>
      </div>
      <div className="footer">
        <h3>JEANETTE K LINDBERG</h3>
        <p>aejlindberg@gmail.com</p>
        <p>+4676 020 69 51</p>
      </div>
    </div>
  )
}
}

export default Project
