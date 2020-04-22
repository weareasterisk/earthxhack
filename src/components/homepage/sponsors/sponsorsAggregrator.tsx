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
        <a href="https://earthx.org/about">
          <img className="max-w-3xl w-full h-auto m-auto" src="https://cdn.weareasterisk.com/event-assets/earthxhack/sponsors/EarthX_NG_Lock-Up-final-horiz.png" alt="EarthX and National Geographic"/>
        </a>
        <a href="https://www.smurfitkappa.com/us/people/careers">
          <img className="max-w-3xl w-full h-auto m-auto" src="https://cdn.weareasterisk.com/event-assets/earthxhack/sponsors/Smurfit20Kappa20Group20Logo.jpg" alt="Smurfit Kappa Group"/>
        </a>
        <a href="https://www.statefarm.com/careers">
          <img className="max-w-lg w-full h-auto m-auto" src="https://cdn.weareasterisk.com/sponsor-assets/statefarm/horizontal-red.png" alt="State Farm Insurance"/>
        </a>
        <a href="https://icreate.org.in/">
          <img className="max-w-md pt-4 w-full h-auto m-auto" src="https://cdn.weareasterisk.com/sponsor-assets/icreate/iCreate_EPS_Logo.png" alt="iCreate"/>
        </a>
        <a href="https://www.utdallas.edu/about/">
          <img className="max-w-sm pt-4 w-full h-auto m-auto" src="https://cdn.weareasterisk.com/sponsor-assets/utd/UTD_50years_orange.png" alt="UTDallas"/>
        </a>

        <div className="md:h-4 h-1"></div>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Sponsors