import React from "react"
import IFAQType from "../../../types/faq";

interface IFAQ {
  faq: IFAQType
}

const FAQ: React.FC<IFAQ> = ({faq}) => {
  const { question, answer } = faq;
  return (
    <React.Fragment>
      <div className="flex-1/2 lg:pt-4 pt-2 lg:text-lg text-sm">
        <h2 className="font-semibold lg:text-2xl text-base pb-.5">{question}</h2>
        {answer}
      </div>
    </React.Fragment>
  )
}

export default FAQ;