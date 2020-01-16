import React from "react";
import Media from "react-media"
import ImageSpacer from "../common/imageSpacer"
import LazyBackground from "../common/lazyBackground"
import LazyImage from "../common/lazyImage";

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
            <img src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/location-decorator.svg" alt="location decorator"/>
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
    <div className="relative xl:w-11 xl:ml-5 xl:-mt-2 attend-baloon">
      <a href={registrationUrl}>
        <LazyImage src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/attend.png" placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/attend-ld.png"/>
        <div className="absolute top-3 text-center left-2">
          <p>Apply to</p>
          <p className="font-bold text-3xl">Attend</p>
        </div>
      </a>
    </div>
  )
}

const VolunteerButton: React.FC = () => {
  return (
    <React.Fragment>
      <div className="relative xl:w-10 xl:ml-16 xl:-mt-2 volunteer-baloon">
        <a href={volunteerUrl}>
          <LazyImage src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/volunteer.png" placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/volunteer-ld.png"/>
          <div className="absolute top-3 text-center left-1.25">
            <p>Apply to</p>
            <p className="font-bold text-2xl">Volunteer</p>
          </div>
        </a>
      </div>
    </React.Fragment>
  )
}

const SponsorButton: React.FC = () => {
  return (
    <React.Fragment>
      <div className="overflow-hidden">
        <div className="overflow-hidden">
          <div className="absolute xl:top-0 xl:right-0 xl:w-25 xl:-top-6 xl:-right-6">
            <a href={sponsorUrl}>
              <LazyImage className="w-full h-full sponsor-sun" src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/buttons/sponsor.svg"/>
              <div className="absolute w-full h-auto top-10 flex justify-around text-center">
                <div>
                  <p className="font-bold text-2xl">Interested in <br/> Sponsoring?</p>
                  <p className="pt-.25">Find out more</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

const Buttons: React.FC = () => {
  return (
    <React.Fragment>
      <div className="push-1/2 w-1/2 mt-5">
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
                    <Buttons/>
                  </div>
                  <div className="pt-8.5 pl-8.5 margin-auto">
                    <div className="w-40 float-left">
                      <ExhLogo/>
                      <div className="flex justify-between pt-3 text-2xl">
                        <Location/>
                        <TagLine/>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {/* Mobile */}
                  <div className="pt-3 px-2.5">
                    <div className="flex justify-around">
                      <div className="block lg:text-2xl text-xl">
                        <ExhLogo/>
                        <div className="pt-2 pl-3">
                          <Location/>
                        </div>
                        <TagLine/>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              )
          }
        </Media>
        <LazyBackground className="bg-cover bottom-0 absolute w-full min-h-1/2-screen bg-top bg-center bg-no-repeat bg-fadedblue -z-50" src={sunflowerFieldUrl} placeholder={sunflowerFieldPlaceholder}/>
      </div>
    </React.Fragment>
  )
}

export default Landing;