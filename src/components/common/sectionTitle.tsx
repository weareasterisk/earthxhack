import React from "react"
import LazyImage from "./lazyImage"
import UnderlinedTitle from "./underlinedTitle"
import COLORS from "../../config/style/colors"

interface ISectionTitle {
  image?: string,
  placeholder?: string,
  name: string
}


const SectionTitle: React.FC<ISectionTitle> = ({image, placeholder, name}) => {
  return (
    <React.Fragment>
      <UnderlinedTitle color={COLORS.fadedyellow} className="font-semibold text-2xl lg:text-5xl pb-1.75 lg:pb-3 pt-3.5 lg:pt-8 table overflow-visible" lineClasses="h-1 lg:h-1.5">
      <LazyImage className="inline-block w-2.5 lg:w-8 mr-.5 -mb-.5 lg:mr-2 lg:-mb-2" src={image ? image : ""} placeholder={placeholder}/>
      <div className="inline relative w-auto top-.25 lg:top-1.5">
        {name}
      </div>
      </UnderlinedTitle>
    </React.Fragment>
  )
}

export default SectionTitle;