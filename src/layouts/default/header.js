import PropTypes from 'prop-types'
import React from 'react'

const Header = props => {
  const { siteTitle } = props

  return (
    <header>
      <div>{siteTitle}</div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
