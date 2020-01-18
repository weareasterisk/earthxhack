import React from "react";
import ContentWrapper from "../common/contentwrapper"
import DecoratorImage from "../common/decoratorImage"
import LazyBackground from "../common/lazyBackground"


const AboutDecorators: React.FC = () => {
  return (
    <React.Fragment>
      <div className="flex w-full justify-right">
        <DecoratorImage className="lg:pb-1 lg:pt-0 pt-1.8125 pb-3" imageClassName="lg:w-18.75 w-10" src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/poly-earth.svg" alt="poly earth"/>
        <img className="lg:w-14 lg:pt-14 lg:-pr-12" alt="red planet" src="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/planets/red-planet.svg"/>
      </div>
    </React.Fragment>
  )
}

const About: React.FC = () => {
  return (
    <LazyBackground className="bg-cover min-h-screen" src="https://cdn.weareasterisk.com/event-assets/earthxhack/backgrounds/patrick-fore-unsplash.png" placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/backgrounds/patrick-fore-unsplash-ld.png">
      <ContentWrapper className="text-white">
        <div className="flex flex-wrap">
          <h1 className="pt-3.5 lg:pt-10 font-semibold lg:text-5xl md:text-4xl text-2xl min-w-full">What is EarthxHack?</h1>
          <div className="flex w-full flex-wrap md:flex-no-wrap">
            <div className="w-full lg:mt-4 mt-1 text-base md:max-w-md lg:text-lg">
              <div className="p-1 -m-1 about-text-blur">
                <p>
                  EarthxHack is a hackathon designed to inspire you to use your creativity,
                  technical thinking, and knowledge to solve real issues plaguing the world today. We want to
                  provide a space to help inspire creative solutions, so you can create inspirational ideas that can 
                  be implemented on a global scale. We encourage you to come and join us in making new things and 
                  turning the world into a better place!
                </p>
                <br/>
                <p>
                  We look forward to hosting you at EarthxHack, taking place at the world’s largest environmental experience,
                  Earthx2020. Join us from April 24th to the 26th to show off your skills, meet amazing people and help make a
                  difference for the future.
                </p>
                <br/>
              </div>
            </div>
            <AboutDecorators/>
          </div>
        </div>
      </ContentWrapper>
    </LazyBackground>
  )
}

export default About;