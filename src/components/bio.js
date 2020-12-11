/** @format */

import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'

const BioText = styled.p`
  margin-bottom: var(--spacing-0);
`
const BioContainer = styled.div`
  display: flex;
  margin-bottom: var(--spacing-16);
`

const BioAvatar = styled(Image)`
  margin-right: var(--spacing-4);
  margin-bottom: var(--spacing-0);
  min-width: 50px;
  border-radius: 100%;
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata.author
  const { name, summary } = author
  const { twitter } = data.site.siteMetadata.social
  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <BioContainer>
      {avatar && (
        <BioAvatar
          fixed={avatar}
          alt={name}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <BioText>
          Written by <strong>{name}</strong> {summary}
          <a href={twitter}>You should follow me on Twitter</a>
        </BioText>
      )}
    </BioContainer>
  )
}

export default Bio
