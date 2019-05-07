import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/container'
import PageHeader from '../components/page-header'
import { graphql } from 'gatsby'

class TestPage extends React.Component {
  render() {
    const pageTitle = 'Test'

    return (
      <Container>
        <Helmet title={`${pageTitle} | Dan Laush`} htmlAttributes={
          {"lang": "en"}
        } />
        <PageHeader title={pageTitle} breadcrumb={{ url: '/', text: 'Home'}} />
        <div>
          <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore, eum?</h1>
          <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, facilis.</h2>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, non.</h3>
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, aperiam.</h4>
          <h5>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, eos!</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fugit tempore eum, ad repudiandae nihil quia amet molestias? Quasi esse neque voluptate iusto minus sit laboriosam, velit recusandae nihil dolorum.</p>
          <p>Pariatur, omnis! Labore architecto magni mollitia accusamus placeat ullam distinctio ex minima! Culpa exercitationem fugit quidem fuga nihil excepturi laudantium cum nam dolores autem perspiciatis, vel reiciendis distinctio, optio natus.</p>
          <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum excepturi vitae officia dolore porro suscipit tempore cupiditate. Laboriosam aliquid asperiores voluptatum repudiandae magni iure ipsa minus numquam, illo modi pariatur.</p>
          <p>Dolorum similique fugiat, alias voluptatem, facere voluptas quod repellendus earum culpa in error odio consectetur voluptate exercitationem enim quos officiis repudiandae amet a. Debitis ab nam veritatis, magnam vitae molestiae.</p>
          <p>Quibusdam dolores harum voluptas ex repellendus maiores deleniti excepturi, beatae repellat, adipisci eius suscipit, atque nulla. Facere, dolores, voluptates nisi cumque magnam iste neque et ducimus sapiente officiis sint recusandae?</p>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias perspiciatis deleniti totam, fugiat voluptatem odit veniam tenetur sit distinctio exercitationem!</h3>
          <ul>
            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit est quia, reprehenderit aut fugit eaque?</li>
            <li>Provident neque incidunt, illo iure soluta tempora quia distinctio quidem pariatur id libero obcaecati ullam!</li>
            <li>Ea incidunt, quibusdam necessitatibus magni mollitia, tempore dolorem illum, libero suscipit iure quis aperiam nemo?</li>
            <li>Placeat porro repudiandae dolorum qui rerum dolorem eveniet eos ad ut! Exercitationem qui similique tempora!</li>
            <li>Atque repellat itaque hic corporis, sit saepe iste accusamus quae dolore, architecto impedit sint nemo.</li>
          </ul>
          <h2>Lorem, ipsum dolor.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugit modi aliquam in. Aut, laboriosam adipisci? Dolorem sequi nam, aliquam explicabo ratione modi quos qui sunt iure molestias optio ut!</p>
          <h3>Lorem ipsum dolor sit amet.</h3>
          <p>Aut veniam harum fugiat culpa quis, quod ex ullam ut, ab nisi vitae beatae sequi dolores quam ratione itaque fugit exercitationem quo, repellat minima dolorum? Dicta, commodi sequi! Earum, aliquam.</p>
          <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</h4>
          <ol>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quia beatae unde laboriosam tenetur vitae.</li>
            <li>Cupiditate consequuntur laborum minus aliquid, modi harum officiis voluptatem illum, tenetur nihil autem expedita natus?</li>
            <li>Ipsum, inventore corporis. Iusto animi itaque, nemo asperiores laudantium deserunt! Quod eum facilis officiis error.</li>
            <li>Dolorum alias reiciendis voluptatum sed incidunt. Similique animi consequuntur magnam laborum, necessitatibus at esse commodi?</li>
            <li>Doloribus, dicta? Molestiae in maxime autem similique, quasi at nulla voluptas ex fugiat excepturi. Earum?</li>
          </ol>
        </div>
      </Container>
    )
  }
}

export default TestPage