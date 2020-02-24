import React from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import ContentWrapper from "../common/contentwrapper"

const Footer: React.FC = () => {
  return (
    <footer>
      <ContentWrapper className="md:pb-3 pb-1.5 md:text-lg text-sm">
        <div className="pull-left">
          <p className="inline">© {new Date().getFullYear()} Asterisk. Made with <FontAwesomeIcon color="red" icon={faHeart}/> in Dallas.</p>
          <div className="inline font-semibold">
            {" "}<a className="footer-link" href="https://weareasterisk.com/terms">Terms</a>{" "}|
            {" "}<a className="footer-link" href="https://weareasterisk.com/privacy">Privacy</a>{" "}|
            {" "}<a className="footer-link" href="https://weareasterisk.com/sales">Sales</a>{" "}|
            {" "}<a className="footer-link" href="https://weareasterisk.com/ethics">Ethics</a>
          </div>
        </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer;