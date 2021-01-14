/** @jsx jsx */
import React from "react"
import { Global } from "@emotion/core"
import { jsx } from "theme-ui"
import SEO from "./seo"
import oceanicNext from "@theme-ui/prism/presets/oceanic-next"

type LayoutProps = { children: React.ReactNode; className?: string }

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Global
      styles={(theme) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        html: {
          fontSize: `18px`,
          WebkitTextSizeAdjust: `100%`,
        },
        img: {
          borderStyle: `none`,
        },
        pre: {
          fontFamily: `monospace`,
          fontSize: `1em`,
          whiteSpace: "break-spaces",
          ...oceanicNext,
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: theme.colors.primary,
          color: theme.colors.background,
        },
        ".ReactModal__Overlay": {
          backgroundColor: "rgba(0, 0, 0, 0.75) !important"
        },
        ".ReactModal__Content": {
          top: "8rem !important",
          right: "8rem !important",
          left: "8rem !important",
          bottom: "8rem !important",
          borderRadius: "0.5rem !important",
          backgroundColor: theme.colors.background + "!important",
          border: "none !important",
          padding: "0.5rem !important",
        },
      })}
    />
    <SEO />
    <main className={className}>{children}</main>
  </React.Fragment>
)

export default Layout
