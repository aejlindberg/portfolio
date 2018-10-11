import React from "react"

class Skills extends React.Component {

  render() {
    return (
      <div>
        <h2>SKILLS</h2>
        <div className="skillsColumns">
          <div className="skills">
            <h3>CODE</h3>
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
            <h3>TOOLBOX</h3>
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
            <h3>MORE</h3>
            <p>Trend analysis</p>
            <p>Ethnography</p>
            <p>Strategy</p>
            <p>Agile methodology</p>
            <p>Digital design</p>
          </div>
        </div>
      </div>

    )
  }
}

export default Skills
