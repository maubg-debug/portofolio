/** @jsx jsx */
import React from "react"
import { Link } from "gatsby"
import { jsx } from "theme-ui"
import useWindowSize from "../hooks/use-window-size"

type ProjectCardProps = {
  link: string
  title: string
  children: React.ReactNode
  bg: string
}

const ProjectCard = ({ link, title, children, bg }: ProjectCardProps) => {
  const { width } = useWindowSize()

  return (
    <Link
      to={link}
      state={{
        modal: width > 1100
      }}
      sx={{
        width: `100%`,
        boxShadow: `lg`,
        position: `relative`,
        textDecoration: `none`,
        borderRadius: `lg`,
        opacity: 0.96,
        px: 4,
        py: [4, 5],
        color: `white`,
        background: bg || `none`,
        transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
        "&:hover": {
          color: `white !important`,
          transform: `translateY(-5px)`,
          boxShadow: `xl`,
          opacity: 1,
        },
      }}
    >
      <div
        sx={{
          textTransform: `uppercase`,
          letterSpacing: `wide`,
          py: 4,
          fontSize: [1, 2],
          fontWeight: `medium`,
          lineHeight: 1,
        }}
      >
        {title}
      </div>
      <div sx={{ opacity: 0.85, textShadow: `0 2px 10px rgba(0, 0, 0, 0.3)` }}>{children}</div>
    </Link>
  )
}

export default ProjectCard
