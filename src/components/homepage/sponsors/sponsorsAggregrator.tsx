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
        <img className="max-w-3xl w-full h-auto m-auto" src="https://cdn.weareasterisk.com/event-assets/earthxhack/sponsors/EarthX_NG_Lock-Up-final-horiz.png" alt="EarthX and National Geographic"/>
        <img className="max-w-3xl w-full h-auto m-auto" src="https://cdn.weareasterisk.com/event-assets/earthxhack/sponsors/Smurfit20Kappa20Group20Logo.jpg" alt="Smurfit Kappa Group"/>
        <img className="max-w-lg w-full h-auto m-auto" src="https://cdn.weareasterisk.com/sponsor-assets/statefarm/horizontal-red.png" alt="State Farm Insurance"/>
        <img className="max-w-md pt-4 w-full h-auto m-auto" src="https://cdn.weareasterisk.com/sponsor-assets/icreate/iCreate_EPS_Logo.png" alt="iCreate"/>

        <div className="md:h-4 h-1"></div>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Sponsors