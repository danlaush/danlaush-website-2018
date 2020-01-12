import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import Container from '../components/container'

const Post = props => {
  const pageTitle = 'Rijksmuseum'
  const [album, updateAlbum] = useState([]);

  useEffect(() => {
    const loadAlbum = async () => {
      const albumData = await fetch('/functions/getPhotosInAlbum').then(r => console.log('photosresponse',r.json()))
      updateAlbum(albumData)
    }
    loadAlbum()
  }, []);

  return (
    <Layout title={pageTitle} breadcrumb>
      <Container>
        <p>Sun 12 January, 2020</p>
        <p>This weekend I got to visit the Rijksmuseum in Amsterdam. I loved the art I saw there and wanted to show a few of the things I appreciated.</p>
        <ul>
          {album.map(photo => <li>{photo.name}</li>)}
        </ul>
      </Container>
    </Layout>
  )
}

Post.propTypes = {

}

export default Post
