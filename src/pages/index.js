import React from 'react'
import { Link } from 'gatsby'
import { DefaultLayout } from 'layouts'
import { SEO, GatsbyImage } from 'components'

const IndexPage = () => {
  return (
    <DefaultLayout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <GatsbyImage />
      </div>
      <Link to="/page-2/">Go t o pa g e 2</Link>
    </DefaultLayout>
  )
}

export default IndexPage
