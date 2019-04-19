import React from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit';

import styles from './media-component.module.css'

export default class MediaComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false
    }
  }

  toggleExpanded() {
    this.setState(prevState => ({
      expanded: !prevState.expanded
    }));
  }

  render() {
    console.log('props?', this.props)
    if(this.props.file.contentType === 'image/png' ||
      this.props.file.contentType === 'image/jpeg') {
      return (
        <Flipper flipKey={this.state.expanded}>
          <Flipped flipId="image">
            <div
              className={`
                ${styles.media}
                ${this.state.expanded
                  ? styles.expanded
                  : null}
              `}>
              <img
                src={this.props.img600.src}
                width={this.props.img600.width/2}
                height={this.props.img600.height/2}
                alt={this.props.description}
                onClick={this.toggleExpanded.bind(this)}
                className={styles.mediaAsset}
              />
            </div>
          </Flipped>
        </Flipper>
      )
    } else if(this.props.file.contentType === 'video/mp4') {
      return (
        <div className={`${styles.media} ${styles.video}`}>
          <video
            autoPlay
            muted
            controls
            width={this.props.width}
            height={this.props.height}
            alt={this.props.description}
            className={styles.mediaAsset}>
            <source src={this.props.file.url}
              type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      )
    } else {
      return (<p>dunno what</p>)
    }
  }
}
