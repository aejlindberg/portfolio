import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Tech extends React.Component {

  render() {
    return (
      <div className="case">
        <p><strong>{this.props.title}</strong></p>
        <Link to={`/cases/${this.props.id}`}>
          <img src={this.props.image} alt="tech" />
        </Link >
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Tech
