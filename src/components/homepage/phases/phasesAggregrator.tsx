import React from "react";
import IPhase from "../../../types/phase"
import Phase from "./phase"
import Spacer from "../../common/spacer"

export interface IPhases {
  data: Array<IPhase>
}

const Phases: React.FC<IPhases> = ({data}) => {
  return (
    <React.Fragment>
      <div className="lg:h-2 h-3"/>
      {data.map((phase: IPhase, key) => {
        return <Phase
          phase={phase}
          key={key}
        />
      })}
    </React.Fragment>
  )
}

export default Phases;