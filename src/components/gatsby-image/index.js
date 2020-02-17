import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { find } from 'lodash'
import Img from 'gatsby-image'

const GatsbyImage = props => {
  const { filename, style, alt, ...other } = props

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const image = find(data.images.edges, edge =>
          edge.node.relativePath.includes(filename)
        )
        if (!image) {
          return null
        }

        return (
          <Img
            style={style}
            alt={alt}
            fluid={image.node.childImageSharp.fluid}
            {...other}
          />
        )
      }}
    />
  )
}

GatsbyImage.defaultProps = {
  style: {},
  alt: '',
}

GatsbyImage.propTypes = {
  filename: PropTypes.string.isRequired,
  style: PropTypes.any,
  alt: PropTypes.string,
}

export default GatsbyImage
