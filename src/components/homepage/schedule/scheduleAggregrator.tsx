import React from "react";
import Masonry from "react-masonry-css"
import ContentWrapper from "../../common/contentwrapper";
import SectionTitle from "../../common/sectionTitle";
import IScheduleDay from "../../../types/scheduleDay"
import ScheduleDay from "./scheduleDay"
import Media from "react-media";

const mediaQueries = {
  lg: {minWidth: "1024px"},
  md: {minWidth: "768px"},
  sm: {minWidth: "640px"},
  xl: {minWidth: "1280px"},
  xs: {minWidth: "480px"}
}

export interface ISchedule {
  data: {
    dayOne: IScheduleDay,
    dayTwo: IScheduleDay,
    dayThree: IScheduleDay
  }
}

const breakpointColumns = {
  default: 2,
  1024: 1
};

const Schedule: React.FC<ISchedule> = ({data}) => {
  return (
    <React.Fragment>
      <ContentWrapper>
        <SectionTitle name="Schedule" image="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/red-flower.png" placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/red-flower.png" />
          <Media queries={mediaQueries}>
            { matches => 
              matches.lg
              ? (
                <Masonry breakpointCols={breakpointColumns} columnClassName="schedule-masonry-column pl-12" className="schedule-masonry-grid flex flex-wrap flex-column overflow-hidden -ml-12">
                  <ScheduleDay {...data.dayOne}/>
                  <ScheduleDay className="pt-1.5" {...data.dayThree}/>
                  <ScheduleDay className="pt-1.5" {...data.dayTwo}/>
                </Masonry>
              ) : (
                <React.Fragment>
                  <ScheduleDay {...data.dayOne}/>
                  <ScheduleDay className="pt-1.5" {...data.dayTwo}/>
                  <ScheduleDay className="pt-1.5" {...data.dayThree}/>
                </React.Fragment>
              )
            }  
            
          </Media>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Schedule