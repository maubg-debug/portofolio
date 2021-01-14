/** @jsx jsx */
import { jsx } from "theme-ui"
import { Icon as Iconify } from '@iconify/react';
import { hidden } from "../styles/utils"

// Los nombres pueden estar incorrectos ya que me da pereza cambiarlos
import gatsby from '@iconify/icons-simple-icons/gatsby';
import react from '@iconify/icons-logos/react';
import typescript from '@iconify/icons-logos/typescript-icon';
import vue from '@iconify/icons-logos/vue';
import sass from '@iconify/icons-logos/sass';
import gridsome from '@iconify/icons-logos/gridsome-icon';
import javascript from '@iconify/icons-logos/javascript';
import git from '@iconify/icons-cib/git';
import css from '@iconify/icons-cib/markdown';
import c from '@iconify/icons-logos/c-sharp';
import linux from '@iconify/icons-flat-color-icons/linux';
import github from '@iconify/icons-cib/github';
import rollup from '@iconify-icons/logos/c-plusplus';
import markdown from '@iconify-icons/vscode-icons/file-type-light-db';
import python from '@iconify-icons/logos/python';
import jekyll from '@iconify-icons/cib/visual-studio';
import nuxt from '@iconify-icons/logos/go';
import node from '@iconify/icons-simple-icons/node-dot-js';
import close from '@iconify/icons-bytesize/close';
import java from '@iconify-icons/logos/java';
import php from '@iconify-icons/cib/php';


type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: string | number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

type IconType =
  "java" |
  "gatsby" |
  "react" |
  "typescript" |
  "vue" |
  "sass" |
  "gridsome" |
  "javascript" |
  "git" |
  "css" |
  "c" |
  "linux" |
  "github" |
  "rollup" |
  "markdown" |
  "jekyll" |
  "nuxt" |
  "node" |
  "close" |
  "python" |
  "php"

const icons = {
  gatsby,
  react,
  typescript,
  vue,
  sass,
  gridsome,
  javascript,
  git,
  css,
  c,
  linux,
  github,
  rollup,
  markdown,
  jekyll,
  nuxt,
  node,
  close,
  python,
  java,
  php,
}

const Icon = ({ color = `currentColor`, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <Iconify
    icon={icons[icon]}
    width={width}
    sx={{
      position: `absolute`,
      fill: `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color: color,
      left: left,
      top: top,
    }}
  />
)

export default Icon
