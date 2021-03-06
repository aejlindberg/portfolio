import React from "react"

class Skills extends React.Component {

  render() {
    return (
      <div className="skillsSection">
        <h2>Skills</h2>
        <div className="skillsColumns">
          <div className="skillsColumnsSingle">
            <h3>Code</h3>
            <div className="skills">
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript ES6</p>
              <p>React</p>
              <p>SASS</p>
              <p>GitHub</p>
              <p>Node.js</p>
            </div>
          </div>
          <div className="skillsColumnsSingle">
            <h3>Toolbox</h3>
            <div className="skills">
              <p>Atom</p>
              <p>Postman</p>
              <p>Adobe Photoshop</p>
              <p>Adobe InDesign</p>
              <p>Adobe Illustrator</p>
              <p>Microsoft Office</p>
              <p>Keynote</p>
              <p>Slack</p>
            </div>
          </div>
          <div className="skillsColumnsSingle">
            <h3>More</h3>
            <div className="skills">
              <p>Trend analysis</p>
              <p>Ethnography</p>
              <p>Strategy</p>
              <p>Concept development</p>
              <p>Agile methodology</p>
              <p>Digital design</p>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Skills
