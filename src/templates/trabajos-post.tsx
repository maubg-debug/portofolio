/** @jsx jsx */

import { jsx } from "theme-ui"
import { graphql, Link } from "gatsby"
import { Icon as Iconify } from '@iconify/react';
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import Scrollbar from "react-scrollbars-custom"
import close from '@iconify/icons-bytesize/close';
import arrowLeft from '@iconify/icons-bytesize/arrow-left';
import Layout from "../components/layout"
import SEO from "../components/seo"

const TrabajosPost = ({ data }: any) => {
  const post = data.markdownRemark
  const gradient = {
    background: post.frontmatter.bg,
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
  }
  const titleStyle = {
    fontSize: "2rem",
    ...gradient,
  }

  return (
    <ModalRoutingContext.Consumer>
      {({ modal, closeTo }: any) => (
        <div>
          {modal ? (
            <Link sx={{
              ...gradient,
              display: "flex",
              justifyContent: "flex-end",
            }} to={closeTo || "/"}>
              <Iconify
                icon={close}
                width="1.5rem"
                sx={{
                  fill: `currentColor`,
                  color: "white",
                  left: `5%`,
                  top: `5%`,
                  margin: "0.3rem",
                  marginBottom: "0.5rem",
                }}
              />
            </Link>
          ) : (
            <Link sx={{
              color: "white",
              display: "flex",
              alignItems: "center",
              padding: "0.75rem",
              width: "fit-content",
              '&:hover': {
                color: "white",
              }
            }} to={closeTo || "/"}>
              <Iconify
                icon={arrowLeft}
                width="1.5rem"
                sx={{
                  fill: `currentColor`,
                  color: "white",
                  left: `5%`,
                  top: `5%`,
                }}
              /><span style={{
                  marginLeft: "10px"
                }}>  Vete a la pagina principal</span>
            </Link>
          )}
          <Scrollbar style={{ width: "100%", height: modal ? "calc(100vh - 20rem)" : "calc(100vh - 56px)" }} sx={{
            ".ScrollbarsCustom-Thumb": {
              background: post.frontmatter.bg + "!important",
            },
            ".ScrollbarsCustom-Content": {
              paddingRight: modal ? "50px !important" : "inherit",
            }
          }}>
            <Layout>
              <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description || post.excerpt}
                />
                <div sx={{
                  maxWidth: "1200px",
                  px: "2rem",
                  margin: "auto",
                }}>
                  <h1 sx={titleStyle}>{post.frontmatter.title}</h1>
                  <div sx={{
                    a: {
                      ...gradient,
                    }
                  }} dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </Layout>
          </Scrollbar>
        </div>
      )}
    </ModalRoutingContext.Consumer>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: {slug: {eq: $path}}) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        title
        bg
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`

export default TrabajosPost
