import React from "react"
import ProjectCard from "../components/project-card"
import Prism from "@theme-ui/prism"

const components = {
  pre: (props) => props.children,
  code: Prism,
  ProjectCard: ({ link, title, bg, children }) => (
    <ProjectCard link={link} title={title} bg={bg}>
      {children}
    </ProjectCard>
  ),
}

export default components
