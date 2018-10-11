import React from "react"
import Tech from "./Tech"
import projectsJson from "../projects.json"

class Cases extends React.Component {

  render() {
    console.log(projectsJson.cases)

    return (
      <div className="casesGrid">
        <div className="techSection">
          {projectsJson.cases.map(item => <Tech
            id={item.key}
            title={item.title}
            image={item.image} />)}
        </div>
      </div>

    )
  }
}

export default Cases
