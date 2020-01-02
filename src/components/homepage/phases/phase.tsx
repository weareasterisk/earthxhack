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
      <ContentWrapper className="pt-8 w-full">
        <div className="max-w-lg">
          <h1 className="font-thin text-6xl">{phase.title}</h1>
          <p className="font-semibold text-2xl pb-1">{phase.period}</p>
          <p className="font-normal text-lg">{phase.tagline}</p>
          <Spacer height="4"/>
          {phase.content && phase.content.map((item) => {
            return <p className="font-normal text-lg pb-1">
              {item}
            </p>
          })}
        </div>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Phase;