import React from "react";

export interface IContentWrapper {
  children?: JSX.Element | Array<JSX.Element> | undefined | Array<undefined> | Element | Array<Element> | object,
  className?: string
}

const ContentWrapper: React.FC<IContentWrapper> = ({children, className}) => {
  return (
    <div className={`px-2.5 md:px-12 ${className}`}>
      {children}
    </div>
  )
}

export default ContentWrapper;