import React from "react"
import { graphql } from "gatsby"
import { Parallax } from "react-spring/renderprops-addons.cjs"
import Layout from "../components/layout"
import Hero from "../components/hero"
// import Projects from "../components/projects"
import Trabajos from "../components/trabajos"
import About from "../components/about"
import Contact from "../components/contact"

require('../styles/style.css');

type TrabajosPost = {
  id: string,
  fields: {
    slug: string,
  },
  frontmatter: {
    date: string,
    title: string,
    excerpt: string,
  }
}

const Home = ({ data }: any) => {
  const trabajosPosts = data.allMarkdownRemark.edges.map(({ node }: { node: TrabajosPost }) => ({
    id: node.id,
    slug: node.fields.slug.slice(0, -1),
    frontmatter: node.frontmatter,
  }))

  return (
  <Layout>
    <Parallax pages={4}>
      <Hero offset={0} factor={1} />
      {/* <Projects offset={1} factor={2} /> */}
      <About offset={1} factor={1} />
      <Trabajos posts={trabajosPosts} offset={2} factor={1} />
      <Contact offset={3} factor={1} />
    </Parallax>
  </Layout>
)}

export const pageQuery = graphql`
  {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/trabajos/"}}) {
      edges {
        node {
          id
          frontmatter {
            date
            title
            excerpt
            bg
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Home
