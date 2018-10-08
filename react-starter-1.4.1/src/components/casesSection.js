import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Cases extends React.Component {

  render() {
    return (
      <div className="casesGrid">
        <div className="case">
          <p><strong>Radio player built in React using Sveriges Radios API:s</strong></p>
          <Link to="/case1"><img src="/images/techExp.jpg" alt="Radio Player" /></Link>
        </div>
        <div className="case">
          <p><strong>Radio player built in React using Sveriges Radios API:s</strong></p>
          <img src="/images/techExp.jpg" alt="Radio Player" />
        </div>
        <div className="case">
          <p><strong>Radio player built in React using Sveriges Radios API:s</strong></p>
          <img src="/images/techExp.jpg" alt="Radio Player" />
        </div>
        <div className="case">
          <p><strong>Radio player built in React using Sveriges Radios API:s</strong></p>
          <img src="/images/techExp.jpg" alt="Radio Player" />
        </div>
        <div className="case">
          <p><strong>Radio player built in React using Sveriges Radios API:s</strong></p>
          <img src="/images/techExp.jpg" alt="Radio Player" />
        </div>
        <div className="case">
          <p><strong>Radio player built in React using Sveriges Radios API:s</strong></p>
          <img src="/images/techExp.jpg" alt="Radio Player" />
        </div>
      </div>

    )
  }
}

export default Cases
