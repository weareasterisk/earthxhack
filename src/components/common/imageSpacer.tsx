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
      <div className={`${className}`} style={{background: background}}>
        <LazyImage
          src={image}
          placeholder={placeholder}
          className="w-full h-auto"
        />
      </div>
    </React.Fragment>
  )
}

export default ImageSpacer
