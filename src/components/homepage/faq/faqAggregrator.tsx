import React from "react"
import ContentWrapper from "../../common/contentwrapper";
import SectionTitle from "../../common/sectionTitle";
import IFAQ from "../../../types/faq";
import FAQ from "./faq";

export interface IFAQs {
  data: Array<IFAQ>
}

const FAQs: React.FC<IFAQs> = ({data}) => {
  return (
    <React.Fragment>
      <ContentWrapper>
        <SectionTitle name="FAQ" image="https://cdn.weareasterisk.com/event-assets/earthxhack/artwork/flower1.webp"/>
        <div className="flex flex-wrap flex-column overflow-auto -mx-5">
          {data.map((content: IFAQ, key) => {
            return <FAQ
              faq={content}
            />
          })}
        </div>
      </ContentWrapper>
    </React.Fragment>
  )
}

export default FAQs