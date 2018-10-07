import React from "react"
import "./style.css"

class Tech extends React.Component {

  render() {
    return (
      <div className="Tech">
        <p>{this.props.title}</p>
        <img src={this.props.image} alt="tech" />
        <p>{this.props.description}</p>
      </div>
    )
  }
}

export default Tech
