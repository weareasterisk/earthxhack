import React from "react";
import * as ImageUtilities from "../../utilities/imageUtilities"
import LazyBackground from "./lazyBackground"

interface ImageSpacerProps {
  image: string,
  placeholder?: string,
  className?: string
}

interface ImageSpacerState {
  image: HTMLImageElement | string,
  height: number,
  width: number,
  src: string,
  placeholder: string
}

export default class ImageSpacer extends React.Component<ImageSpacerProps, ImageSpacerState> {
  constructor(props: ImageSpacerProps) {
    super(props)
    this.state = {
      image: "",
      height: 0,
      width: 0,
      src: "",
      placeholder: ""
    }
  }

  componentDidMount() {
    const { image } = this.props

    const imageLoader = new Image()
    imageLoader.src = image
    imageLoader.onload = () => {
      this.setState({
        image: imageLoader,
        height: imageLoader.height,
        width: imageLoader.width,
        src: imageLoader.src
      })
    }
  }

  render() {
    const { height, width, src } = this.state
    const { placeholder, className } = this.props
    return (
      <React.Fragment>
        <div
          className={`background bg-contain bg-no-repeat w-full h-0 ${className}`}
          style={{
            backgroundImage: ImageUtilities.standardizeUrl(src),
            paddingTop: (width && height) ? `${((height/width)*100)}%` : ""
          }}
        />
      </React.Fragment>
    )
  }
}

