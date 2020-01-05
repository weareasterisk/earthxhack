import React from "react";
import LazyImage from "../common/lazyImage"

interface IDecoratorImage {
  src: string,
  placeholder?: string,
  alt?: string,
  className?: string,
  imageClassName?: string
}

const DecoratorImage: React.FC<IDecoratorImage> = ({src, placeholder, alt, className, imageClassName}) => {
  return (
    <React.Fragment>
      <div className={`relative w-full items-center lg:justify-end flex justify-around ${className}`}>
        <LazyImage className={`inline-block h-auto ${imageClassName}`} src={src} alt={alt} placeholder={placeholder}/>
      </div>
    </React.Fragment>
  )
}

export default DecoratorImage;