import React from "react"
import ContentWrapper from "../../common/contentwrapper";
import SectionTitle from "../../common/sectionTitle"

export interface ISponsorsAggregrator {
  data: any
}

const Sponsors: React.FC<ISponsorsAggregrator> = ({data}) => {
  return (
    <React.Fragment>
      <ContentWrapper>
        <SectionTitle name="Sponsors" image="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/flower1.webp"/>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Sponsors