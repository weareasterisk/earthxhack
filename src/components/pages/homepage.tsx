import React, { Component } from "react";
import About from "../homepage/about";
import Phases from "../homepage/phases/phasesAggregrator"
import PhaseData from "../../config/phases"
import ImageSpacer from "../common/imageSpacer"
import Sponsors from "../homepage/sponsors/sponsorsAggregrator"

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <About/>
        <Phases data={PhaseData}/>
        <ImageSpacer image="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/mountains-min.png"/>
        <Sponsors data="asd"/>
      </React.Fragment>

    )
  }
}