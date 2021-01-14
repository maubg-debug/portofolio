/** @jsx jsx */
import { jsx } from "theme-ui"
import { Zoom } from "react-awesome-reveal";
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import ProjectCard from "./project-card"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"

const Trabajos = ({ posts, offset, factor = 2 }: { posts: Array<any>, offset: number; factor?: number }) => (
  <div>

    <Content speed={0.1} offset={offset} factor={factor}>
      <Inner>
        <div
          sx={{
            display: `grid`,
            gridGap: [4, 4, 4, 5],
            gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
            h2: { gridColumn: `-1/1`, color: `white !important` },
          }}
        >
          <Zoom damping={0.1} triggerOnce cascade sx={{
            display: "flex",
          }}>
            {posts.map(({ id, slug, frontmatter: { title, excerpt = "", bg} }) => (
              <ProjectCard
                key={id}
                title={title}
                link={slug}
                bg={bg || "linear-gradient(150deg, #D585FF 0%, #00FFEE 100%)"}
                >
                {excerpt}
              </ProjectCard>
            ))}
          </Zoom>
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG icon="triangle" width={8} stroke color="icon_orange" left="25%" top="5%" />
        <SVG icon="circle" hiddenMobile width={12} color="icon_bright" left="17%" top="60%" />
      </UpDown>
      <UpDownWide>
        <SVG icon="arrowUp" hiddenMobile width={16} color="icon_green" left="20%" top="90%" />
        <SVG icon="triangle" width={12} stroke color="icon_brightest" left="90%" top="30%" />
        <SVG icon="circle" width={16} color="icon_yellow" left="70%" top="90%" />
        <SVG icon="triangle" hiddenMobile width={16} stroke color="icon_teal" left="18%" top="75%" />
        <SVG icon="circle" width={6} color="icon_brightest" left="75%" top="10%" />
        <SVG icon="upDown" hiddenMobile width={8} color="icon_green" left="45%" top="10%" />
      </UpDownWide>
      <SVG icon="circle" hiddenMobile width={6} color="icon_brightest" left="4%" top="20%" />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG icon="hexa" width={16} stroke color="icon_red" left="75%" top="30%" />
      <SVG icon="hexa" width={8} stroke color="icon_yellow" left="80%" top="70%" />
    </Divider>
  </div>
)

export default Trabajos
