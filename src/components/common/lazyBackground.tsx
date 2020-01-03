import React from "react";
import * as ImageUtilities from "../../utilities/imageUtilities"

interface LazyBackgroundProps {
  src: string,
  placeholder: string,
  className?: string,
  style?: React.CSSProperties,
  children: JSX.Element | Array<JSX.Element> | undefined | Array<undefined> | Element | Array<Element> | object,
}

interface LazyBackgroundState {
  src: string | null
}

export default class LazyBackground extends React.Component<LazyBackgroundProps, LazyBackgroundState> {
  constructor(props: LazyBackgroundProps) {
    super(props)
    this.state = {
      src: null
    }
  }

  componentDidMount() {
    const { src } = this.props

    const imageLoader = new Image()
    imageLoader.src = src;

    imageLoader.onload = () => {
      this.setState({ src })
    }
  }

  render() {
    const { src } = this.state
    const { className, placeholder, style } = this.props
    return (
      <React.Fragment>
        <div
          className={`background ${className}`}
          style={{
            backgroundImage: ImageUtilities.standardizeUrl(src || placeholder),
            ...{blur: `${(!src ? "blur(8px)" : "")}`},
            ...style
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}