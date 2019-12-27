import React from 'react'
import Layout from '../components/Layout'
import LayoutSearch from '../components/LayoutSearch'

export default (props) => {
  return(
    <Layout>
      <section className="titles">
				<p>
					<span>Descubre</span> <br /> grandes alianzas
				</p>
			</section>
      <LayoutSearch />
    </Layout>
  )
}