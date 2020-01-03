import React from "react";
import Media from "react-media";
import {Moment} from "moment";

const mediaQueries = {
  lg: {minWidth: "1024px"},
  md: {minWidth: "768px"},
  sm: {minWidth: "640px"},
  xl: {minWidth: "1280px"},
  xs: {minWidth: "480px"}
}

interface IPhasePeriod {
  startTime: Moment,
  endTime?: Moment
}

interface IPeriodDate {
  month?: string,
  day?: string,
  time?: string
}

const PhasePeriod: React.FC<IPhasePeriod> = ({ startTime, endTime }) => {
  const mobileComponent = startTime.isSame(endTime, 'day')
    ? <React.Fragment>
      {`${startTime.format("MMMM Do, h:mma")} - ${endTime ? endTime.format("h:mma") : ""}`}
    </React.Fragment>

    : <React.Fragment>
      {`Starts: ${startTime.format("MMMM Do, h:mma")}`}
      <br/>
      {`Ends: ${endTime ? endTime.format("MMMM Do, h:mma") : ""}`}
    </React.Fragment>

  const desktopComponent = startTime.isSame(endTime, 'day')
    ? <React.Fragment>
      {`${startTime.format("MMMM Do, h:mma")} - ${endTime ? endTime.format("h:mma") : ""}`}
    </React.Fragment>
    : <React.Fragment>
      {`${startTime.format("MMMM Do, h:mma")} - ${endTime ? endTime.format("MMMM Do, h:mma") : ""}`}
    </React.Fragment>


  return (
    <React.Fragment>
      <Media queries={mediaQueries}>
        { matches =>
            matches.lg
            ? ( <p className="font-semibold text-2xl pb-1">{desktopComponent}</p> )
            : ( <p className="font-semibold text-base pb-1">{mobileComponent}</p> )
        }
      </Media>
    </React.Fragment>
  )
}

export default PhasePeriod;