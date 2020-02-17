import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'emotion-theming'
import { ThemesContextProvider, ThemesContext } from '@context'
import GlobalStyles from '../global-styles'
import Header from './header'

const App = props => {
  const { children } = props

  const { theme } = useContext(ThemesContext)

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata.title} />
      <main css={currentTheme => ({ backgroundColor: currentTheme.base01 })}>
        {children}
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </ThemeProvider>
  )
}

const Layout = props => {
  const { children } = props

  return (
    <ThemesContextProvider>
      <App>{children}</App>
    </ThemesContextProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
