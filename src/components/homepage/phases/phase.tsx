import React from "react";
import IPhaseType from "../../../types/phase";
import ContentWrapper from "../../common/contentwrapper";
import Spacer from "../../common/spacer";

interface IPhase {
  phase: IPhaseType
}

const Phase: React.FC<IPhase> = ({phase}) => {
  return (
    <React.Fragment>
      <Spacer color="transparent" height="2"></Spacer>
      <ContentWrapper className="pt-8">
        <h1 className="font-thin text-6xl">{phase.title}</h1>
        <p className="font-semibold text-2xl">{phase.period}</p>
        
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Phase;