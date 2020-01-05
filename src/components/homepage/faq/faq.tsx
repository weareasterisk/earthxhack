import React from "react"
import IFAQType from "../../../types/faq";

interface IFAQ {
  faq: IFAQType
}

const FAQ: React.FC<IFAQ> = ({faq}) => {
  const { question, answer } = faq;
  return (
    <React.Fragment>
      <div className="flex-1/2 pt-4 faq text-lg px-5">
        <h2 className="font-semibold text-2xl">{question}</h2>
        {answer}
      </div>
    </React.Fragment>
  )
}

export default FAQ;