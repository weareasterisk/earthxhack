import React, { Component } from "react";
import About from "../homepage/about";
import Phases from "../homepage/phases/phasesAggregrator"
import PhaseData from "../../config/phases"

export default class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <About/>
        <Phases data={PhaseData}/>
      </React.Fragment>

    )
  }
}