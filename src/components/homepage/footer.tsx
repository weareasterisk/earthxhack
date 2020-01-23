import React from "react"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHeart} from "@fortawesome/free-solid-svg-icons"
import ContentWrapper from "../common/contentwrapper"

const Footer: React.FC = () => {
  return (
    <footer>
      <ContentWrapper className="md:pb-3 pb-1.5 md:text-lg text-sm">
        <p className="pull-left">
          © {new Date().getFullYear()} Asterisk. Made with <FontAwesomeIcon color="red" icon={faHeart}/> in Dallas.
          <div className="inline font-semibold">
            {" "}<a className="footer-link" href="https://weareasterisk.com/terms">Terms</a>{" "}|
            {" "}<a className="footer-link" href="https://weareasterisk.com/privacy">Privacy</a>{" "}|
            {" "}<a className="footer-link" href="https://weareasterisk.com/sales">Sales</a>{" "}|
            {" "}<a className="footer-link" href="https://weareasterisk.com/ethics">Ethics</a>
          </div>
        </p>
      </ContentWrapper>
    </footer>
  )
}

export default Footer;