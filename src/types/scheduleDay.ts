import ScheduleItem from "./scheduleItem"

export default interface IScheduleDay {
  identifier: string,
  items: Array<ScheduleItem>
}