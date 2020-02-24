import React from "react"
import IScheduleDay from "../../../types/scheduleDay"

interface IScheduleDayProps {
  className?: string
}

const ScheduleDay: React.FC<IScheduleDay & IScheduleDayProps> = (data) => {
  return (
    <React.Fragment>
      <div className={data.className}>
        <h1 className="xl:text-2xl lg:text-xl text-sm font-bold lg:pb-3 pb-1">{data.identifier}</h1>
        {
          data.items.map((item, key) => {
            return (
              <div key={key} className={`${(key % 2 === 1) ? "bg-fadedgreen" : ""} ${(item.phase ? "font-semibold" : "")} flex px-.5 -mx-.5 xl:text-lg lg:text-base lg:mb-1.5 text-xs mb-.5`}>
                <div className="float-left w-5/12">
                  <span>{item.period}</span>
                </div>
                <div className="w-full pl-1.5">
                  <span>{item.event}</span>
                </div>
              </div>
            )
          })
        }
      </div>
    </React.Fragment>
  )
}

export default ScheduleDay