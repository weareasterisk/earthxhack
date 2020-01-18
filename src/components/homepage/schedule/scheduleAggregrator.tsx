import React from "react";
import Masonry from "react-masonry-css"
import ContentWrapper from "../../common/contentwrapper";
import SectionTitle from "../../common/sectionTitle";
import IScheduleDay from "../../../types/scheduleDay"
import ScheduleDay from "./scheduleDay"

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
        <Masonry breakpointCols={breakpointColumns} columnClassName="schedule-masonry-column pl-12" className="schedule-masonry-grid flex flex-wrap flex-column overflow-hidden -ml-12">
          <ScheduleDay {...data.dayOne}/>
          <ScheduleDay className="pt-1.5" {...data.dayTwo}/>
          <ScheduleDay className="pt-1.5" {...data.dayThree}/>
        </Masonry>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Schedule