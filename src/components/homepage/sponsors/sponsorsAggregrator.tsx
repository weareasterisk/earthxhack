import React from "react"
import ContentWrapper from "../../common/contentwrapper";
import SectionTitle from "../../common/sectionTitle"

export interface ISponsorsAggregrator {
  data: any
}

const Sponsors: React.FC<ISponsorsAggregrator> = ({data}) => {
  return (
    <React.Fragment>
      <ContentWrapper className="min-h-screen">
        <SectionTitle name="Sponsors" image="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/pink-flower.png" placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/pink-flower-ld.png"/>
        <div className="md:h-2 h-1"></div>
        <img className="w-full h-auto" src="https://cdn.weareasterisk.com/event-assets/earthxhack/sponsors/EarthX_NG_Lock-Up-final-horiz.png" alt="EarthX and National Geographic"/>
        <img className="w-full h-auto" src="https://cdn.weareasterisk.com/event-assets/earthxhack/sponsors/Smurfit20Kappa20Group20Logo.jpg" alt="Smurfit Kappa Group"/>

        <div className="md:h-4 h-1"></div>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Sponsors