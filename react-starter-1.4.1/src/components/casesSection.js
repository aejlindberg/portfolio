import React from "react"
import Tech from "./Tech"
import cases from "../techExp.json"

class Cases extends React.Component {

  render() {
    return (
      <div className="casesGrid">
        <div className="techSection">
          {cases.item.map(item => <Tech
            id={item.key}
            title={item.title}
            image={item.image}
            description={item.description} />)}
        </div>

      </div>

    )
  }
}

export default Cases
