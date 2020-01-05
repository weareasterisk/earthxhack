import React from "react";
import LazyImage from "./lazyImage";

interface IImageSpacer {
  image: string,
  placeholder?: string,
  className?: string,
  style?: React.CSSProperties,
  background?: string
}

const ImageSpacer: React.FC<IImageSpacer> = ({image, placeholder, className, background, style}) => {
  return (
    <React.Fragment>
      <LazyImage
        src={image}
        placeholder={placeholder}
        className={`w-full h-auto ${className}`}
        style={{
          background: background,
          ...style
        }}
      />
    </React.Fragment>
  )
}

export default ImageSpacer
