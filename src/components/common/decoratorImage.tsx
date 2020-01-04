import React from "react";

interface IDecoratorImage {
  src: string,
  alt?: string,
  className?: string,
  imageClassName?: string,
  maxWidth: string
  maxMobileWidth?: string
}

const DecoratorImage: React.FC<IDecoratorImage> = ({src, alt, className, imageClassName, maxWidth, maxMobileWidth}) => {
  return (
    <React.Fragment>
      <div className={`relative w-full items-center lg:justify-end flex justify-around ${className}`}>
        <img className={`inline-block h-auto ${maxMobileWidth ? `w-${maxMobileWidth}` : ""} lg:w-${maxWidth} ${imageClassName}`} src={src} alt={alt? alt : ""}/>
      </div>
    </React.Fragment>
  )
}

export default DecoratorImage;