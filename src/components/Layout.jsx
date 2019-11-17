import React, { Fragment } from 'react'
import Header from './Header'
import '../assests/styles/styles.scss'
import Footer from './Footer'
import SEO from './SEO'

export default (props) => {
  return(
    <Fragment>
      <SEO />
      <Header />
      <main>{ props.children }</main>
      <Footer />
    </Fragment>
  )
}