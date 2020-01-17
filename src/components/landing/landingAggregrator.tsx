import React from "react";
import Media from "react-media"
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

const registrationUrl = "https://astr.sk/earthxhack-register"
const volunteerUrl = "https://astr.sk/earthxhack-volunteer"
const sponsorUrl = "https://astr.sk/earthxhack-sponsor"

const ExhLogo: React.FC = () => {
  return (
    <img src="http://cdn.weareasterisk.com/event-assets/earthxhack/logos/exh_logo.svg" alt="EarthxHack Logo"></img>
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
            <p>The Embarcadero Building</p>
            <p>Fair Park, Dallas</p>
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
      <div className="xl:text-right text-left font-thin">
        <p>Make something</p>
        <p>your mom would</p>
        <p>be proud of.</p>
      </div>
    </React.Fragment>
  )
}

const AttendButton: React.FC = () => {
  return (
    <div className="relative xl:w-11 lg:w-8 w-6 xl:ml-5 xl:-mt-2 mt-1 attend-baloon">
      <a href={registrationUrl}>
        <LazyImage src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/attend.png" placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/attend-ld.png"/>
        <div className="absolute xl:top-3 lg:top-2 text-center xl:left-2 lg:left-1.5 top-1.5 left-1">
          <p className="xl:text-base lg:text-sm text-xs">Apply to</p>
          <p className="font-bold xl:text-3xl lg:text-xl text-lg">Attend</p>
        </div>
      </a>
    </div>
  )
}

const VolunteerButton: React.FC = () => {
  return (
    <React.Fragment>
      <div className="relative xl:w-10 lg:w-8 w-5 xl:ml-16 lg:ml-10 ml-6 xl:-mt-2 -mt-4 volunteer-baloon">
        <a href={volunteerUrl}>
          <LazyImage src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/volunteer.png" placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/volunteer-ld.png"/>
          <div className="absolute xl:top-3 lg:top-2.5 text-center xl:left-1.25 lg:left-1.25 top-1.5 left-.25">
            <p className="xl:text-base lg:text-sm text-xxs">Apply to</p>
            <p className="font-bold xl:text-2xl lg:text-base text-sm">Volunteer</p>
          </div>
        </a>
      </div>
    </React.Fragment>
  )
}

const SponsorButton: React.FC = () => {
  return (
    <React.Fragment>
      <div className="overflow-hidden -z-50">
        <div className="overflow-hidden">
          <div className="absolute xl:top-0 xl:right-0 xl:w-25 lg:w-18 w-12 xl:-top-6 -top-1 xl:-right-6 -right-6 -z-40">
            <a href={sponsorUrl}>
              <LazyImage className="w-full h-full sponsor-sun" src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/sponsor.svg"/>
              <div className="absolute w-full h-auto xl:top-10 lg:top-7 top-4.5 flex justify-around text-center">
                <div>
                  <p className="font-bold xl:text-2xl lg:text-base text-xs">Interested in <br/> Sponsoring?</p>
                  <p className="pt-.25 xl:text-base lg:text-xs text-xxs">Find out more</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const DesktopButtons: React.FC = () => {
  return (
    <React.Fragment>
      <div className="xl:push-1/2 xl:w-1/2 xl:mt-5 w-full z-0">
        <AttendButton/>
        <VolunteerButton/>
        <SponsorButton/>
      </div>
    </React.Fragment>
  )
}

const Landing: React.FC = () => {
  return (
    <React.Fragment>
      <div className="h-screen bg-fadedblue relative z-10 overflow-x-hidden">
        <Media queries={mediaQueries}>
          { matches =>
              matches.xl
              ? ( 
                <React.Fragment>
                  {/* Desktop */}
                  <div className="absolute w-full">
                    <DesktopButtons/>
                  </div>
                  <ContentWrapper className="pt-8.5">
                    <div className="w-40 float-left">
                      <ExhLogo/>
                      <div className="flex justify-between pt-3 text-2xl">
                        <Location/>
                        <TagLine/>
                      </div>
                    </div>
                  </ContentWrapper>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {/* Mobile */}
                  <div className="pt-3 px-2.5">
                    <div className="flex justify-around">
                      <div className="lg:text-2xl md:text-lg sm:text-base text-xs">
                        <ExhLogo/>
                        <div className="pt-2 pl-1">
                          <Location/>
                        </div>
                        <div className="relative pt-1">
                          <DesktopButtons/>
                        </div>
                        <TagLine/>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
          }
        </Media>
        <LazyBackground className="bg-cover bottom-0 absolute w-full min-h-1/4-screen xl:min-h-1/2-screen bg-top bg-center bg-no-repeat bg-fadedblue -z-50" src={sunflowerFieldUrl} placeholder={sunflowerFieldPlaceholder}/>
      </div>
    </React.Fragment>
  )
}

export default Landing;