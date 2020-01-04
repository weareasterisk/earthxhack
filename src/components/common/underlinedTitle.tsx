import React from "react";

interface IUnderlinedTitle {
  color: string,
  className?: string,
  style?: React.CSSProperties,
  children?:  JSX.Element | Array<JSX.Element> | undefined | Array<undefined> | Element | Array<Element> | object | string,
  width?: string,
  height?: string,
  grow?: "left" | "right",
  lineClasses?: string
}

const UnderlinedTitle: React.FC<IUnderlinedTitle> = ({color, className, style, children, width = "100%", height="2rem", grow, lineClasses}) => {
  const commonStyles = {
    // height: height,
    backgroundColor: color
  }

  return (
    <React.Fragment>
      <div className={`${className}`} style={{
        lineHeight: "100%",
        ...style
      }}>
        {children}
        <div className={`relative`} style={{ zIndex: -500}}>
          <div style={{
            // marginTop: `calc(-1 * (${height} / 1.3))`,
            transform: "translate(0, -60%)",
            width: grow ? width : `calc(${width} + 10%)`,
            ...commonStyles
          }}
          className={lineClasses}>
            { grow && grow === "left" &&
              <div 
              className={`absolute overflow-hidden w-screen ${lineClasses}`}
              style={{
                left: "-100vw",
                ...commonStyles
              }}/>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default UnderlinedTitle