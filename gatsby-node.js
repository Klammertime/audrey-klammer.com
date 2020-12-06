const path = require(`path`)
// gatsby-source-filesystem exports three helper functions:
// 1) createFilePath
// 2) createRemoteFileNode
// 3) createFileNodeFrom
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.createPages = async ({ graphql, actions, reporter }) => {
exports.createPages = async gatsbyNodeHelpers => {
  const { graphql, actions, reporter } = gatsbyNodeHelpers
  //reporter - GatsbyReporter - Set of utilities to output information to user
  //actions - Collection of functions used to programmatically modify Gatsby’s internal state.
  const { createPage } = actions

  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              path
              templateKey
            }
          }
        }
        allOtherJson {
          nodes {
            id
            content
            image
            forSlug
            path
            templateKey
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  if (posts.length > 0 && posts.templateKey !== null) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
      createPage({
        path: `${post.frontmatter.path}${String(post.fields.slug)}`,
        component: path.resolve(
          `src/templates/${String(post.frontmatter.templateKey)}.js`
        ),
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }

  const postsJson = result.data.allOtherJson.nodes

  if (postsJson.length > 0) {
    postsJson.forEach((post, index) => {
      createPage({
        path: `${post.path}${String(post.forSlug)}`,
        component: path.resolve(`src/templates/portfolio-post.js`),
        context: {
          id: post.id,
        },
      })
    })
  }
}

exports.onCreateNode = gatsbyNodeHelpers => {
  const { node, actions, getNode } = gatsbyNodeHelpers
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    let value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  if (node.internal.type === "OtherJson") {
    // extends the existing gatsby node with a new field, later accessible via the fields graphql node.
    createNodeField({
      node, // the current node
      name: `otherImage`, // defines a name for the new element being added.
      value: `../images/${node.image}`, //Injects the value, this will be relative to the path of the json, it will look into /src/images
    })

    createNodeField({
      node, // the current node
      name: `otherImage2`, // defines a name for the new element being added.
      value: `../images/${node.image2}`, //Injects the value, this will be relative to the path of the json, it will look into /src/images
    })

    createNodeField({
      node, // the current node
      name: `otherImage3`, // defines a name for the new element being added.
      value: `../images/${node.image3}`, //Injects the value, this will be relative to the path of the json, it will look into /src/images
    })
  }
}

exports.createSchemaCustomization = gatsbyNodeHelpers => {
  const { actions } = gatsbyNodeHelpers
  const { createTypes } = actions
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Test {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
