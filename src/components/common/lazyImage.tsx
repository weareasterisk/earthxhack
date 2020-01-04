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

  async componentDidMount() {
    const { src, placeholder } = this.props
    const imageLoader = new Image();
    imageLoader.src = src;
    imageLoader.onload = () => {
      this.setState({ src })
    }
    if (!!placeholder) {
      const placeholderLoader = new Image();
      placeholderLoader.src = placeholder
      placeholderLoader.onload = () => {
        this.setState({ placeholder })
      }
    }
  }

  render() {
    const { src, placeholder } = this.state
    const { className, style, alt } = this.props;
    return (
      <React.Fragment>
        <img className={`${className}`}
          style={{
            ...style
          }}
          src={!!src ? src : (!!placeholder ? placeholder : "")}
          alt={alt}
        />
      </React.Fragment>
    )
  }
}