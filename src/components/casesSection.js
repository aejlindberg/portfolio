import React from "react"
import Tech from "./Tech"
import projectsJson from "../projects.json"

class Cases extends React.Component {

  render() {

    return (
      <div className="casesGrid">
        <div className="casesGridItems">
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
