import React from "react"
import Tech from "./Tech"
import cases from "../techExp.json"

class Cases extends React.Component {

  render() {
    return (
      <div className="casesGrid">
        <div className="techSection">
          {cases.experiences.map(experience => <Tech
            id={experience.key}
            title={experience.title}
            image={experience.image}
            description={experience.description} />)}
        </div>

      </div>

    )
  }
}

export default Cases
