import React, { Component } from 'react';
import { PATH } from '../../constants';

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videoSource: null,
      imageSource: null
    };

    this.videoRef = React.createRef();
  }

  async componentDidMount() {
    const { src, poster } = this.props;
    let { videoSource, imageSource } = this.state;

    if (src.indexOf(PATH.IMAGE_PATH) < 0) {
      imageSource = await import('../../media/images/' + poster);
      videoSource = await import('../../media/video/' + src);
    }

    this.setState({ videoSource, imageSource });
  }

  componentDidUpdate() {
    const { videoSource } = this.state;

    if (this.videoRef && videoSource) {
      this.videoRef.current.pause();
      this.videoRef.current.play();
    }
  }

  render() {
    const {
      src,
      type,
      preload,
      poster,
      muted = true,
      className,
      children,
      ...props
    } = this.props;
    const { videoSource, imageSource } = this.state;
    const videoType = 'video/' + type;

    return (
      <video
        className={className}
        poster={imageSource || ''}
        preload={preload || 'auto'}
        muted={muted}
        ref={this.videoRef}
        {...props}
      >
        {!!videoSource &&
          !children && <source src={videoSource} type={videoType} />}
        {children}
      </video>
    );
  }
}

export default Video;
