/** @format */

import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogWrapper = styled.div`
  position: relative;
  z-index: 3;
  max-width: 870px;
  margin: 0 auto;
  padding: 0 72px;
`

const Date = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  padding: 10px 0;
  justify-content: center;
  align-items: center;
  color: #979da9;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  text-transform: uppercase;
`

const BlogTitle = styled.h1`
  z-index: 3;
  margin: 12px 0 0 0;
  font-size: 36px;
  line-height: 48px;
  text-align: center;
  text-transform: capitalize;
`

const PostHeader = styled.header`
  position: relative;
  z-index: 3;
  display: flex;
  padding: 48px 40px;
  flex-direction: column;
  align-items: center;
`

const StyledUL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
`
const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout
      location={location}
      title={siteTitle}
      header={post.frontmatter.title}
      pageDescription={post.frontmatter.title}
      templateHeader={true}
    >
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogWrapper>
        <article itemScope itemType="http://schema.org/Article">
          <PostHeader>
            <Date>{post.frontmatter.date}</Date>
            <BlogTitle itemProp="headline">{post.frontmatter.title}</BlogTitle>
          </PostHeader>
          <section dangerouslySetInnerHTML={{ __html: post.html }} itemProp="articleBody" />
          <hr />
          <footer>
            <Bio />
          </footer>
        </article>
        <nav className="blog-post-nav">
          <StyledUL>
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </StyledUL>
        </nav>
      </BlogWrapper>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
