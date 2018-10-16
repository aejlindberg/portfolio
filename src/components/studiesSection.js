import React from "react"

class Studies extends React.Component {

  render() {
    return (
      <div>
        <h2>Studies</h2>
        <div className="studiesColumns">
          <div className="studies">
            <h3>Frontend development</h3>
            <p>Full-time 12 w boot camp / intensive program.
            Covering everything from the basics of programming
            to how to structure and build bigger web projects.
            Focus on JavaScript. Total 480 coding hours, 50 +
            individual tasks (in HTML5, CSS, JavaScript, JSX,
            React, Node.js) and 6 sprints with demos together
            with companies like Volumental, Bonnier News Comprend and
            Svenska Spel.
            </p>
            <p>Stockholm Sep.-Nov. 2018</p>
          </div>
          <div className="studies">
            <h3>JavaScript</h3>
            <p>3 days intensive course in JavaScript. Covering the basics
            of JavaScript and how to fetch API:s. Built a news site with
            the Google News API.
            </p>
            <p>Visby Sep. 2018</p>
          </div>
          <div className="studies">
            <h3>HTML and CSS</h3>
            <p>5 days online course. A quick insight into the three languages
            that form the basis of web programming: HTML, CSS and JavaScript.
            </p>
            <p>Stockholm Feb. 2018</p>
          </div>
          <div className="studies">
            <h3>Wordpress</h3>
            <p>2 full days introduction to WordPress. Covering the essentials
            of how to build and modify a webpage in Wordpress.
            </p>
            <p>Stockholm Feb. 2014</p>
          </div>
          <div className="studies">
            <h3>Master in Social Anthropology</h3>
            <p>5 years at Stockholm University. The master’s program
            consisted of a number of courses in theory and method, a
            wide selection of elective, specialized courses, and a
            one-term master’s thesis, based on two-three months of
            fieldwork. My main focus was digital anthropology.
            </p>
            <p>Stockholm Sep. 2005-Sep. 2010</p>
          </div>
        </div>
        <div className="studiesButton">
          <a href="https://www.linkedin.com/in/jeanette-k-lindberg-93961441/" target="_blank"><button>
          SEE MY LINKEDIN</button></a>
        </div>
      </div>
    )
  }
}

export default Studies
