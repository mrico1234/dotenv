import React from 'react'
import Layout from '../components/Layout'
import Search from '../components/Search'
import BusinessSectors from '../components/BusinessSectors'
import SearchResults from '../components/SearchResults'
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
      {/* <Search />
      <BusinessSectors />
      <SearchResults /> */}
    </Layout>
  )
}