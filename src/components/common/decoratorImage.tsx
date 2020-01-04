import React from "react";

interface IDecoratorImage {
  src: string,
  alt?: string,
  className?: string,
  imageClassName?: string
}

const DecoratorImage: React.FC<IDecoratorImage> = ({src, alt, className, imageClassName}) => {
  return (
    <React.Fragment>
      <div className={`relative w-full items-center lg:justify-end flex justify-around ${className}`}>
        <img className={`inline-block h-auto ${imageClassName}`} src={src} alt={alt? alt : undefined}/>
      </div>
    </React.Fragment>
  )
}

export default DecoratorImage;