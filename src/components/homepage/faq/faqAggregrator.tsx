import React from "react"
import Masonry from "react-masonry-css"
import ContentWrapper from "../../common/contentwrapper";
import SectionTitle from "../../common/sectionTitle";
import IFAQ from "../../../types/faq";
import FAQ from "./faq";

export interface IFAQs {
  data: Array<IFAQ>
}

const breakpointColumns = {
  default: 2,
  1024: 1
};

const FAQs: React.FC<IFAQs> = ({data}) => {
  return (
    <React.Fragment>
      <ContentWrapper>
        <SectionTitle name="FAQ" image="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/sunflower.png" placeholder="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/sunflower-ld.png"/>
        <Masonry breakpointCols={breakpointColumns} columnClassName="faq-masonry-column remove-margin" className="faq-masonry-grid flex flex-wrap flex-column overflow-hidden -ml-12">
          {data.map((content: IFAQ, key) => {
            return <FAQ
              faq={content}
              key={key}
            />
          })}
        </Masonry>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default FAQs