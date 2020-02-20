import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'emotion-theming'
import { rhythm } from '@theme/typography'
import styled from '@emotion/styled'
import { ThemesContextProvider, ThemesContext } from '@context'
import GlobalStyles from '../global-styles'

const Container = styled.div`
  max-width: ${rhythm(100)};
  margin: 0 auto;
  height: 100%;
  overflow-y: auto;
`

const App = props => {
  const { children } = props

  const { theme } = useContext(ThemesContext)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>{children}</Container>
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
