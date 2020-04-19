import React from "react";
import Media from "react-media"
import ReactPixel from "react-facebook-pixel"
import ImageSpacer from "../common/imageSpacer"
import LazyBackground from "../common/lazyBackground"
import LazyImage from "../common/lazyImage";
import ContentWrapper from "../common/contentwrapper";

const mediaQueries = {
  lg: {minWidth: "1024px"},
  md: {minWidth: "768px"},
  sm: {minWidth: "640px"},
  xl: {minWidth: "1280px"},
  xs: {minWidth: "480px"}
}

const sunflowerFieldUrl = "https://cdn.weareasterisk.com/event-assets/earthxhack/backgrounds/sunflower-field.png"
const sunflowerFieldPlaceholder = "https://cdn.weareasterisk.com/event-assets/earthxhack/backgrounds/sunflower-field-ld.png"

export const registrationUrl = "https://astr.sk/earthxhack-register"
export const volunteerUrl = "https://astr.sk/earthxhack-volunteer"
// const sponsorUrl = "https://astr.sk/earthxhack-sponsor"
export const sponsorUrl = "mailto:kila@weareasterisk.com"
export const mentorUrl = "https://astr.sk/earthxhack-mentor"
export const devpostUrl = "https://earthxhack20.devpost.com/"
export const liveSiteUrl = "https://astr.sk/earthxhack-live"

const ExhLogo: React.FC = () => {
  return (
    <img src="https://cdn.weareasterisk.com/event-assets/earthxhack/logos/exh_logo.svg" alt="EarthxHack Logo"></img>
  )
}

const Location: React.FC = () => {
  return (
    <React.Fragment>
      <div className="font-bold">
        <div className="relative" style={{zIndex: 0}}>
          <div style={{
            zIndex: 9999
          }}
          >
            <p>April 24-26, 2020</p>
            <p>The Internet</p>
            {/* <p>Fair Park, Dallas</p> */}
          </div>
          <div className="absolute" style={{
            top: 0,
            zIndex: -1,
            left: "-44px"
          }}>
            <img className="xl:h-4 lg:h-3 h-2 xl:ml-0 lg:ml-1 ml-1.5" src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/location-decorator.svg" alt="location decorator"/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const TagLine: React.FC = () => {
  return (
    <React.Fragment>
      <div className="md:text-right text-left font-thin">
        <p>Make something</p>
        <p>your mom would</p>
        <p>be proud of.</p>
      </div>
    </React.Fragment>
  )
}

const AttendButton: React.FC = () => {
  return (
    <div className="relative opacity-0 lg:opacity-100 xl:w-11 lg:w-8 w-6 xl:ml-5 xl:-mt-2 mt-1 attend-baloon z-2">
      <LazyImage src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/Balloon_2_Full.png" placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/attend-ld.png"/>
    </div>
  )
}

const VolunteerButton: React.FC = () => {
  return (
    <React.Fragment>
      <div className="relative xl:w-10 lg:w-8 w-5 xl:ml-16 lg:ml-10 ml-18 xl:-mt-2 mt-14 volunteer-baloon z-2">
        <LazyImage src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/Balloon_Full.png" placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/volunteer-ld.png"/>
      </div>
    </React.Fragment>
  )
}

const SponsorButton: React.FC = () => {
  return (
    <React.Fragment>
        <div className="absolute xl:w-20 lg:w-18 w-12 xl:-top-2 -top-6 xl:-right-2 -right-8 z-1">
          <LazyImage className="w-full h-full sponsor-sun" src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/sponsor.svg"/>
        </div>
    </React.Fragment>
  )
}

const MentorButton: React.FC = () => {
  return (
    <React.Fragment>
      <div className="relative xl:w-14 lg:w-10 w-8 xl:-mt-30 xl:ml-16 lg:ml-12 ml-12 lg:-mt-20 xs:-pt-4 xs:mb-0 -pt-2 -mb-8 z-2 mentor-cloud">
        <LazyImage className="w-full h-full" src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/cloud.svg"/>
      </div>
    </React.Fragment>
  )
}

const Balloons: React.FC = () => {
  return (
    <React.Fragment>
      <div className="absolute top-0 right-0 xl:w-1/2 xl:mt-5 md:w-1/2 sm:w-full z-0">
        <AttendButton/>
        <VolunteerButton/>
        <MentorButton/>
        <SponsorButton/>
      </div>
    </React.Fragment>
  )
}

const MobileButtons: React.FC = () => {
  return (
    <React.Fragment>
      <div className="xl:push-1/2 xl:w-1/2 xl:mt-5 w-full z-5">
        <AttendButton/>
        <VolunteerButton/>
        <MentorButton/>
        <SponsorButton/>
      </div>
    </React.Fragment>
  )
}

export default class Landing extends React.Component {
  componentDidMount() {
    const attend = document.getElementById("attend-button")
    const volunteer = document.getElementById("volunteer-button")
    const sponsor = document.getElementById("sponsor-button")
    const mentor = document.getElementById("mentor-button")
    const devpost = document.getElementById("devpost-button")
    const liveSite = document.getElementById("live-site-button")
    this.setupPixelEvent(attend, "attend")
    this.setupPixelEvent(volunteer, "volunteer")
    this.setupPixelEvent(sponsor, "sponsor")
    this.setupPixelEvent(mentor, "mentor")
    this.setupPixelEvent(devpost, "devpost")
    this.setupPixelEvent(liveSite, "live-site")
  }

  setupPixelEvent = (element: HTMLElement | null, name: string) => {
    element?.addEventListener(
      'click',
      () => {
        ReactPixel.trackCustom(name, {})
      }
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="min-h-screen bg-fadedblue relative overflow-x-hidden flex justify-between flex-col">
          <Balloons/>
          <ContentWrapper className="md:pt-8.5 pt-3 z-10">
            <div className="md:max-w-40 md:float-left">
              <ExhLogo/>
              <div className="flex md:justify-between justify-start pl-1.25 md:pl-0 pt-2 md:pt-3 text-lg md:text-2xl pb-2">
                <Location/>
                <div className="hidden md:flex">
                  <TagLine/>
                </div>
              </div>
              <div className="flex flex-wrap py-.5">
                <a href={registrationUrl} className="mr-1 mb-1" id="attend-button">
                  <button className="px-1 py-.5 bg-red text-white uppercase font-semibold">
                    Register
                  </button>
                </a>
                <a href={mentorUrl} className="mr-1 mb-1" id="mentor-button">
                  <button className="px-1 py-.5 bg-teal text-white uppercase font-semibold">
                    Mentor
                  </button>
                </a>
                <a href={volunteerUrl} className="mr-1 mb-1" id="volunteer-button">
                  <button className="px-1 py-.5 bg-purple text-white uppercase font-semibold">
                    Volunteer
                  </button>
                </a>
                <a href={sponsorUrl} className="mr-1 mb-1" id="sponsor-button">
                  <button className="px-1 py-.5 bg-blue text-white uppercase font-semibold">
                    Sponsor
                  </button>
                </a>
              </div>
              <div className="md:hidden flex">
                <TagLine/>
              </div>
              <div className="flex flex-wrap py-1 md:pb-1 md:pt-0">
                <a href={devpostUrl} className="mr-1 mb-1" id="devpost-button">
                  <button className="px-1 py-.5 bg-navy text-white uppercase font-semibold">
                    Devpost
                  </button>
                </a>
                <a href={liveSiteUrl} className="mr-1 mb-1" id="live-site-button">
                  <button className="px-1 py-.5 bg-green text-white uppercase font-semibold">
                    Live Site
                  </button>
                </a>
              </div>
            </div>
          </ContentWrapper>
          <LazyImage className="w-full lg:max-h-1/2-screen max-h-1/2-screen object-cover object-top" src={sunflowerFieldUrl} placeholder={sunflowerFieldPlaceholder}/>
        </div>
      </React.Fragment>
    )
  }
}
