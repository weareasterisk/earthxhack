import React from "react";
import * as ImageUtilities from "../../utilities/imageUtilities"

interface ImageSpacerProps {
  image: string
}

interface ImageSpacerState {
  image: HTMLImageElement,
  height: number,
  width: number,
  src: string
}

export default class ImageSpacer extends React.Component<ImageSpacerProps, ImageSpacerState> {
  constructor(props: ImageSpacerProps) {
    super(props)
    const image = new Image()
    image.src = props.image
    const { height, width, src } = image

    this.state = {
      image,
      height,
      width,
      src
    }
  }

  render() {
    const { height, width, src } = this.state
    return (
      <React.Fragment>
        <div
        className="background bg-contain bg-no-repeat w-full h-0"
        style={{
          backgroundImage: ImageUtilities.standardizeUrl(src),
          paddingTop: `${((height/width)*100)}%`
        }}
      />
      </React.Fragment>
    )
  }
}

