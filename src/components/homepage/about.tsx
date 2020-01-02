import React from "react";

const About: React.FC = () => {
  return (
    <React.Fragment>
      <div className="px-2.5 md:px-12 bg-about bg-cover background min-h-screen text-white">
        <div className="flex flex-wrap">
          <h1 className="pt-3.5 lg:pt-10 font-semibold lg:text-5xl md:text-4xl text-2xl min-w-full">What is EarthxHack?</h1>
          <div className="flex w-full flex-wrap md:flex-no-wrap">
            <div className="w-full text-base md:max-w-xl lg:text-lg">
              <p className="pt-1 lg:pt-4">
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
            </div>
            <div className="relative w-full items-center lg:justify-end flex py-1.8125 justify-around">
              <img className="inline-block h-auto max-w-10 lg:max-w-18.75" src="//cdn.weareasterisk.com/event-assets/earthxhack/artwork/poly-earth.png" alt="poly earth"/>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default About;