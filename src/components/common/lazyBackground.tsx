import React from "react";

interface LazyBackgroundProps {
  src: string,
  placeholder?: string,
  className?: string,
  style?: React.CSSProperties,
  children?: JSX.Element | Array<JSX.Element> | undefined | Array<undefined> | Element | Array<Element> | object,
}

interface LazyBackgroundState {
  src: string | undefined | null,
  loaded: boolean
}

export default class LazyBackground extends React.Component<LazyBackgroundProps, LazyBackgroundState> {
  constructor(props: LazyBackgroundProps) {
    super(props)
    this.state = {
      src: this.props.placeholder,
      loaded: false
    }
  }

  async loadImage(src: string) {
    const imageLoader = new Image();
    imageLoader.onload = () => {
      this.setState({ src, loaded: true })
    }
    imageLoader.src = src;
  }

  async componentDidMount() {
    const { src } = this.props

    Promise.resolve(this.loadImage(src))
  }

  render() {
    const { src } = this.state
    const { className, style } = this.props

    return (
      this.state.loaded 
      ? <React.Fragment>
        <div
          className={`background ${className}`}
          style={{
            backgroundImage: `url(${this.state.src})`,
            ...style
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
      : <React.Fragment>
        <div
          className={`background ${className}`}
          style={{
            backgroundImage: `url(${this.props.placeholder})`,
            ...{blur: `${("blur(8px)")}`},
            ...style
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    )
  }
}