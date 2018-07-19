import React, { Component } from 'react';
import classNames from 'classnames';
import { IMAGE_PATH } from '~/constants';

class Image extends Component {
  constructor(props) {
    super(props);

    this.mounted = false;
    this.state = {
      imageSource: null
    };
  }

  async componentDidMount() {
    const { src } = this.props;
    let { imageSource } = this.state;
    this.mounted = true;
    if (src.indexOf('http://') !== -1 || src.indexOf('https://') !== -1) {
      imageSource = src;
    } else {
      if (src.indexOf(IMAGE_PATH) === -1) {
        try {
          imageSource = await import(`~/assets/images/${src}`);
        } catch (e) {
          console.log('not find : ' + src);
          imageSource = null; // show no-image
        }
      }
    }

    if (this.mounted && imageSource) {
      this.setState({ imageSource });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    const { src, size, position, className, style } = this.props;
    const { imageSource } = this.state;

    let { alt } = this.props;

    const defaultClass = 'auto-size';

    let styles = { ...style };

    if (size) {
      styles = { ...styles, ...size };
    }
    if (position) {
      styles = { ...styles, ...position };
    }
    if (!alt) {
      alt = src.substr(
        src.lastIndexOf('/') + 1,
        src.lastIndexOf('.') - src.lastIndexOf('/') - 1
      );
    }

    return imageSource ? (
      <img
        className={classNames(className, defaultClass)}
        style={styles}
        src={imageSource || ''}
        alt={alt}
      />
    ) : null;
  }
}

export default Image;
