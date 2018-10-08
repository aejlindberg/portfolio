import React from "react"
import "./style.css"
import cases from "../../techExp.json"

class Project extends React.Component {

  render() {
    return (
      <div className="projectPage">
        <a href="#">&#8592; BACK</a>
        <div className="projectImage">
          <img src="./techExp.jpg" alt="computer" />
        </div>
        <div className="projectText">
          <h1>{this.props.match.params.id}RADIO PLAYER BUILT IN REACT USING SVERIGES
          RADIOS API:S
          </h1>
          <p>About the project. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec magna dui,
          scelerisque placerat blandit quis, eleifend vitae
          odio. Integer vitae nibh vel ante elementum dictum
          eget id magna. Quisque id diam ac dolor efficitur
          hendrerit. Etiam eget tortor pharetra eros lacinia
          consequat in sed lorem. Pellentesque ultrices rutrum
          magna ac fringilla. Fusce aliquam rhoncus lectus eu
          auctor. Proin dapibus ornare libero, sit amet semper
          lacus consectetur et. Donec rhoncus, odio eget lacinia
          volutpat, dui dolor faucibus tellus, fringilla mollis
          quam nulla id risus. Nam ultricies suscipit orci a
          pulvinar. Donec tempus erat purus, sed pulvinar risus
          semper nec.
          </p>
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
