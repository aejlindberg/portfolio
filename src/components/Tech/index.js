import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

class Tech extends React.Component {

  render() {
    return (
      <div className="case">
        <div>
          <h3><strong>{this.props.title}</strong></h3>
        </div>
        <Link to={`/cases/${this.props.id}`}>
          <img src={this.props.image} alt="" />
        </Link >
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Tech
