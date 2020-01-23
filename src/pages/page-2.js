import React from 'react'
import { Link } from 'gatsby'
import { DefaultLayout } from 'layouts'
import { SEO } from 'components'

const SecondPage = () => (
  <DefaultLayout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the ho me page</Link>
  </DefaultLayout>
)

export default SecondPage
