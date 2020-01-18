import React, { Component } from "react";
import About from "../homepage/about";
import Phases from "../homepage/phases/phasesAggregrator"
import PhaseData from "../../config/phases"
import ImageSpacer from "../common/imageSpacer"
import Sponsors from "../homepage/sponsors/sponsorsAggregrator"
import FAQs from "../homepage/faq/faqAggregrator";
import FAQData from "../../config/faq";
import Landing from "../landing/landingAggregrator"
import Schedule from "../homepage/schedule/scheduleAggregrator"
import ScheduleData from "../../config/schedule"

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Landing/>

        <section id="about">
          <About/>
        </section>

        <section id="phases">
          <Phases data={PhaseData}/>
        </section>

        <ImageSpacer 
          image="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/mountains.webp"
          placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/mountains-ld.webp"
          className="pt-4 lg:pt-14"
          background={"linear-gradient(180deg, #FFFFFF 0%, #E9F0F8 65.62%, #F9F3E9 77.08%, #F7EAAA 83.85%, #F2D312 93.23%)"}
        />
        {/* <Sponsors data="asd"/>
        <ImageSpacer 
          image="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/wood.webp" 
          placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/wood-ld.webp"
        /> */}

        <section id="faq">
          <FAQs
            data={FAQData}
          />
        </section>

        <section id="schedule">
          <Schedule data={ScheduleData}/>
        </section>

        <ImageSpacer
          image="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/compass.png"
          placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/compass-ld.png"
        />
      </React.Fragment>

    )
  }
}