import React from "react";
import IPhase from "../../../types/phase"
import Phase from "./phase"

export interface IPhases {
  data: Array<IPhase>
}

const Phases: React.FC<IPhases> = ({data}) => {
  return (
    <React.Fragment>
      {data.map((phase: IPhase) => {
        return <Phase
          phase={phase}
        />
      })}
    </React.Fragment>
  )
}

export default Phases;