import React from "react"

class Studies extends React.Component {

  render() {
    return (
      <div>
        <h2>STUDIES</h2>
        <div className="studiesColumns">
          <div className="studies">
            <h3>FRONTEND DEVELOPER</h3>
            <p>Full-time 12 w boot camp / intensive program.
            Covering everything from the basics of programming
            to how to structure and build bigger web projects.
            Focus on JavaScript. Total 480 coding hours, 50 +
            individual tasks (in HTML5, CSS, JavaScript, JSX,
            React, Node.js) and 6 sprints with demos together
            with companies like Volumental, Bonnier News and
            Comprend.
            </p>
            <p>Sthlm Sep.-Nov. 2018</p>
          </div>
          <div className="studies">
            <h3>JAVASCRIPT</h3>
            <p>3 day intensive course in JavaScript. Build a
            newsite with Google News API.
            </p>
            <p>Visby Sep. 2018</p>
          </div>
          <div className="studies">
            <h3>HTML AND CSS</h3>
            <p>Online Course. Build a webpage in HTML & CSS.
            </p>
            <p>Sthlm Feb. 2018</p>
          </div>
          <div className="studies">
            <h3>WORDPRESS</h3>
            <p>Introduction to WordPress.
            </p>
            <p>Sthlm Feb. 2014</p>
          </div>
          <div className="studies">
            <h3>MASTER IN SOCIAL ANTHROPOLOGY</h3>
            <p>5 years at Stockholm University.
            </p>
            <p>Sthlm Sep. 2005-Sep. 2010</p>
          </div>
          <div className="studiesButton">
            <button>SEE MY LINKEDIN</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Studies
