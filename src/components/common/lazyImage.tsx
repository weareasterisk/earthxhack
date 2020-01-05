import React from "react";

interface ILazyImageProps {
  src: string,
  alt?: string,
  className?: string,
  style?: React.CSSProperties,
  placeholder?: string
}

interface ILazyImageState {
  src: string | undefined,
  placeholder: string | undefined
}

export default class LazyImage extends React.Component<ILazyImageProps, ILazyImageState> {
  constructor(props: ILazyImageProps) {
    super(props)
    this.state = {
      src: "",
      placeholder: ""
    }
  }

  async loadImage(src: string) {
    const imageLoader = new Image();
    imageLoader.src = src;
    imageLoader.onload = () => {
      this.setState({ src })
    }
  }

  async componentDidMount() {
    const { src } = this.props
    Promise.resolve(this.loadImage(src))
  }

  render() {
    const { src } = this.state
    const { placeholder, className, style, alt } = this.props;
    return (
      <React.Fragment>
        <img className={`${className}`}
          style={{
            ...style
          }}
          src={src || placeholder}
          alt={alt}
        />
      </React.Fragment>
    )
  }
}