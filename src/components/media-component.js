import React from 'react'
// import Link from 'gatsby-link'
// import Img from 'gatsby-image'

import styles from './media-component.module.css'

export default ({
    media: { 
      file,
      img600,
      width,
      height
    }   
  }) => {
  if(file.contentType === 'image/png' ||
      file.contentType === 'image/jpeg') {
    return (
      <img
        src={img600.src}
        width={img600.width/2}
        height={img600.height/2} />
    )
  } else if(file.contentType === 'video/mp4') {
    return (
      <div className={styles.video}>
        <video
          autoPlay
          muted
          controls
          width={width}
          height={height}>
          <source src={file.url}
            type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    )
  } else {
    return (<p>dunno what</p>)
  }
}