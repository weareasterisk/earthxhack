import React, { Component } from "react"
import NavigationItem from "./navigationItem"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faPlus} from "@fortawesome/free-solid-svg-icons"

import {registrationUrl, volunteerUrl, sponsorUrl, mentorUrl } from "../../landing/landingAggregrator"

const PageNavigation: React.FC = () => {
  return(
    <React.Fragment>
      <NavigationItem link="#about">about</NavigationItem>
      <NavigationItem link="#phases">phases</NavigationItem>
      <NavigationItem link="#faq">faq</NavigationItem>
      <NavigationItem link="#schedule">schedule</NavigationItem>
      <NavigationItem link="#contact">contact</NavigationItem>
    </React.Fragment>
  )
}

const ExternalNavigation: React.FC = () => {
  return (
    <React.Fragment>
      <NavigationItem link={registrationUrl}>attend</NavigationItem>
      <NavigationItem link={mentorUrl}>mentor</NavigationItem>
      <NavigationItem link={volunteerUrl}>volunteer</NavigationItem>
      <NavigationItem link={sponsorUrl}>sponsor</NavigationItem>
    </React.Fragment>

  )
}

export interface NavigationState {
  open: boolean
}

export interface NavigationProps {

}

export default class Navigation extends Component<NavigationProps, NavigationState> {
  constructor() {
    super({})
    this.state = {
      open: false,
    }
    this.handleNavToggle = this.handleNavToggle.bind(this)
  }

  handleNavToggle = async () => {
    await this.setState({open: !this.state.open})
    const box = document.getElementById("pageNav");
    if (this.state.open) {
      box?.classList.remove("hidden")
    } else {
      box?.classList.add("hidden")
    }
  }
  
  render() {
    return (
      <React.Fragment>
        <div className="fixed top-0 left-0 w-full md:h-4 h-2 bg-black z-40">
          {/* TODO: Figure this out later */}
          {/* <div className="xl:hidden absolute top-0 right-1 h-4 w-4 py-1 px-.75 flex flex-col justify-between" id="navToggler">
            <input type="checkbox" checked={this.state.open} onChange={this.handleNavToggle} id="navCheckbox" className="top-0 left-0 h-4 w-4 absolute opacity-0 cursor-pointer z-2"/>
            <FontAwesomeIcon color="white" icon={faPlus} className="w-full h-full patty" size={"2x"}/>
          </div> */}
          <div className="flex w-full xl:justify-between justify-around text-white items-center h-full">
            <div className="xl:justify-start hidden xl:flex justify-end">
              <PageNavigation/>
            </div>
            <div className="flex xl:justify-end justify-between xl:w-auto w-full xl:px-0 sm:px-2 px-1">
              <ExternalNavigation/>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}