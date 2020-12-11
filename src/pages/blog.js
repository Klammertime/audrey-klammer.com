/** @format */

import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Bio from '../components/bio'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogWrapper = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
`

const PostListItem = styled.article`
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);
`
const PostListItemHeader = styled.header`
  margin-bottom: var(--spacing-4);
`
const PostListItemHeading = styled.h2`
  font-size: var(--fontSize-4);
  color: var(--color-primary);
  margin-bottom: var(--spacing-2);
  margin-top: var(--spacing-0);
`
const PostListItemContent = styled.p`
  margin-bottom: var(--spacing-0);
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes
  const { pageHeader } = data.pageContentJson
  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <SEO title="All posts" />
        <Bio />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle} header={'Blog'} pageDescription={pageHeader}>
      <SEO title="All posts" />
      <BlogWrapper>
        <Bio />
        <ol style={{ listStyle: `none` }}>
          {posts.map((post) => {
            const title = post.frontmatter.title || post.fields.slug

            return (
              <li key={post.fields.slug}>
                <PostListItem itemScope itemType="http://schema.org/Article">
                  <PostListItemHeader>
                    <PostListItemHeading>
                      <Link to={`/blog${post.fields.slug}`} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </PostListItemHeading>
                    <small>{post.frontmatter.date}</small>
                  </PostListItemHeader>
                  <section>
                    <PostListItemContent
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                  </section>
                </PostListItem>
              </li>
            )
          })}
        </ol>
      </BlogWrapper>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    pageContentJson(page: { eq: "blog" }) {
      pageHeader
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          path
        }
      }
    }
  }
`
