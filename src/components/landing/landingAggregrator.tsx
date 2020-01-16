import React from "react";
import Media from "react-media"
import ImageSpacer from "../common/imageSpacer"
import LazyBackground from "../common/lazyBackground"

const mediaQueries = {
  lg: {minWidth: "1024px"},
  md: {minWidth: "768px"},
  sm: {minWidth: "640px"},
  xl: {minWidth: "1280px"},
  xs: {minWidth: "480px"}
}

const sunflowerFieldUrl = "https://cdn.weareasterisk.com/event-assets/earthxhack/backgrounds/sunflower-field.png"
const sunflowerFieldPlaceholder = "https://cdn.weareasterisk.com/event-assets/earthxhack/backgrounds/sunflower-field-ld.png"

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
      <div className="lg:text-right text-left font-thin">
        <p>Make something</p>
        <p>your mom would</p>
        <p>be proud of.</p>
      </div>
    </React.Fragment>
  )
}

const Landing: React.FC = () => {
  return (
    <React.Fragment>
      <LazyBackground className="bg-contain min-h-screen bg-bottom bg-no-repeat bg-fadedblue" src={sunflowerFieldUrl} placeholder={sunflowerFieldPlaceholder}>
        <Media queries={mediaQueries}>
          { matches =>
              matches.lg
              ? ( 
                <React.Fragment>
                  {/* Desktop */}
                  <div className="pt-8.5 pl-8.5">
                    <div className="w-40">
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
                      <div className="block">
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
      </LazyBackground>
    </React.Fragment>
  )
}

export default Landing;