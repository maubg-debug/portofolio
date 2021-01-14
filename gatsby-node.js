const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const trabajosPostTemplate = path.resolve(`src/templates/trabajos-post.tsx`)
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges
      .filter(({ node }) => !node.frontmatter.draft)
      .forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: trabajosPostTemplate,
          slug: node.fields.slug,
          context: {
            slug: node.fields.slug
          },
        })
      })
  })
}

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
