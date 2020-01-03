import React from "react";
import * as ImageUtilities from "../../utilities/imageUtilities"

interface ImageSpacerProps {
  image: string
}

interface ImageSpacerState {
  image: HTMLImageElement | string,
  height: number,
  width: number,
  src: string
}

export default class ImageSpacer extends React.Component<ImageSpacerProps, ImageSpacerState> {
  constructor(props: ImageSpacerProps) {
    super(props)
    this.state = {
      image: "",
      height: 0,
      width: 0,
      src: ""
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
    return (
      <React.Fragment>
        <div
        className="background bg-contain bg-no-repeat w-full h-0"
        style={{
          backgroundImage: !!src ? ImageUtilities.standardizeUrl(src) : "",
          paddingTop: (width && height) ? `${((height/width)*100)}%` : ""
        }}
      />
      </React.Fragment>
    )
  }
}

