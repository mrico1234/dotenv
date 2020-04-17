import React from 'react'
import Header from './Header'
import '../assests/styles/styles.scss'
import Footer from './Footer'
import SEO from './SEO'

export default (props) => {
  return(
    <>
      <SEO />
      <Header />
      <main>{ props.children }</main>
      <Footer />
    </>
  )
}