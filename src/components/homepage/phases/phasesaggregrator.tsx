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
      <Spacer color="transparent" height="2"/>
      {data.map((phase: IPhase) => {
        return <Phase
          phase={phase}
        />
      })}
    </React.Fragment>
  )
}

export default Phases;