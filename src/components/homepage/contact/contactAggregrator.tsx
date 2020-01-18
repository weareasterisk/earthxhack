import React from "react"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faFacebook, faTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"
import ContentWrapper from "../../common/contentwrapper"

const Contact: React.FC = () => {
  return (
    <React.Fragment>
      <ContentWrapper className="pt-6">
        <div className="flex pull-left pb-4 table">
          <img className="md:w-4 w-2.5 h-full inline-block md:mr-2 mr-1" src="https://cdn.weareasterisk.com/logos/svg/logo-only-rgb.svg" alt="asterisk logo"/>
          <h1 className="inline-block font-semibold md:text-5xl text-2xl align-middle">Hello!</h1>
        </div>
        <div className="flex flex-row md:flex-no-wrap flex-wrap md:pb-14 pb-5">
          <div className="w-full md:pr-14">
            <h2 className="md:text-2xl text-lg font-semibold md:pb-2 pb-.5">Lets's connect!</h2>
            <div className="md:text-lg text-sm">
              <p>
                We'd love to hear from you! We are a friendly bunch and open to discussing new ideas, improvements, or partnerships.
              </p>
              <p className="pt-3 font-semibold">
                <u><a href="mailto:hello@weareasterisk.com">hello@weareasterisk.com</a></u>
              </p>
            </div>
          </div>
          <div className="w-full max-w-25 md:pt-0 pt-2">
            <h2 className="md:text-2xl text-lg font-semibold">Follow us</h2>
            <div className="md:text-lg text-sm">
              <p>
                Stay in the loop and keep track of the cool things we're trying to do.
              </p>
              <p className="pt-3 font-semibold">
                <p><u><a href="https://facebook.com/asteriskevents"><FontAwesomeIcon className="mr-.25 text-xl" icon={faFacebook}/>@AsteriskEvents</a></u></p>
                <p><u><a href="https://twitter.com/helloasterisk"><FontAwesomeIcon className="mr-.25 text-xl" icon={faTwitter}/>@HelloAsterisk</a></u></p>
                <p><u><a href="https://instagram.com/helloasterisk"><FontAwesomeIcon className="mr-.25 text-xl" icon={faInstagram}/>@HelloAsterisk</a></u></p>
              </p>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default Contact