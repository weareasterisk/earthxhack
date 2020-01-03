import React from "react";
import moment from "moment";
import IPhaseType from "../../../types/phase";
import ContentWrapper from "../../common/contentwrapper";
import InlineImage from "../../common/inlineImage";
import PhasePeriod from "./phasePeriod";

interface IPhase {
  phase: IPhaseType
}

const Phase: React.FC<IPhase> = ({phase}) => {
  const { startTime, endTime } = phase;
  const start = moment(startTime)
  const end = moment(endTime)

  return (
    <React.Fragment>
      <ContentWrapper className="lg:pt-8 w-full">
        <div className="flex w-full flex-wrap-reverse md:flex-no-wrap">
          <div className="max-w-lg w-full">
            <h1 className="font-thin lg:text-6xl text-3xl pb-1">{phase.title}</h1>
            {/* <p className="font-semibold lg:text-2xl text-lg pb-1">{phase.period}</p> */}
            <PhasePeriod startTime={start} endTime={end}/>
            <p className="font-normal lg:text-base text-sm">{phase.tagline}</p>
            <div className="lg:h-4 h-2.5"/>
            {phase.content && phase.content.map((item, key) => {
              return <p className="font-normal lg:text-base text-sm pb-1" key={key}>
                {item}
              </p>
            })}
          </div>
          {phase.image &&
            <InlineImage className="lg:pb-1 lg:pt-0 lg:pt-1.8125 lg:pl-3 pb-3" src={phase.image} maxMobileWidth="11" maxWidth="25"/>
          }
        </div>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Phase;