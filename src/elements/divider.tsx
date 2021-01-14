/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"
import { hidden } from "../styles/utils"

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
  factor?: number
  hiddenMobile?: boolean
}

const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  hiddenMobile = false,
}: DividerProps) => (
  <ParallaxLayer
    sx={{
      position: `absolute`,
      display: hiddenMobile ? hidden : `block`,
      width: `full`,
      height: `full`,
      background: bg,
      backgroundColor: bg,
      "#contact-wave": {
        color: fill,
        fill: `currentColor`,
      },
      clipPath,
    }}
    speed={speed}
    offset={offset}
    factor={factor}
  >
    {children}
  </ParallaxLayer>
)

export default Divider
