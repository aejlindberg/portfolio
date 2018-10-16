import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import projectsJson from "../../projects.json"

class Project extends React.Component {

state = {
  caseInView: projectsJson.cases[this.props.match.params.id - 1]
}
render() {
  window.scrollTo(0, 0)

  const listCode = this.state.caseInView.code.map((item) =>
    <p>{item}</p>
  )
  const listToolbox = this.state.caseInView.toolbox.map((item) =>
    <p>{item}</p>
  )
  const listMore = this.state.caseInView.more.map((item) =>
    <p>{item}</p>
  )

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
          <p><span>About the project:</span> {this.state.caseInView.description}</p>
          <button>SEE IT LIVE</button>
        </div>

        <div className="techSpecsSection">
          <h2>TECH SPECS</h2>
        </div>
        <div className="techSpecsColumns">
          <div className="techSpecs">
            <h3>CODE</h3>
              {listCode}
          </div>
          <div className="techSpecs">
            <h3>TOOLBOX</h3>
            {listToolbox}
          </div>
          <div className="techSpecs">
            <h3>MORE</h3>
            {listMore}
          </div>
        </div>
        <div className="projectButton">
          <a href={this.state.caseInView.url}><button>VIEW THE CODE</button></a>
        </div>
      </div>
      <div className="footer">
        <p>JEANETTE K LINDBERG</p>
        <p>aejlindberg@gmail.com</p>
        <p>+4676 020 69 51</p>
      </div>
    </div>
  )
}
}

export default Project
