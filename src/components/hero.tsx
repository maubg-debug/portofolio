/** @jsx jsx */
import { jsx } from "theme-ui"
import { Fade, Slide } from "react-awesome-reveal";
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import Icon from "./icon"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore
import Intro from "../sections/intro"

const Hero = ({ offset, factor = 1 }: { offset: number; factor?: number }) => (
  <div>
    <Divider speed={0.2} offset={offset} factor={factor}>
      <Fade damping={0.2} triggerOnce cascade>
        <Icon
          icon="git"
          color="icon_darkest"
          width="4rem"
          left="50%"
          top="5%"
          hiddenMobile
        />
        <Icon
          icon="c"
          color="icon_darkest"
          width="3rem"
          left="15%"
          top="70%"
          hiddenMobile
        />
        <Icon
          icon="markdown"
          color="icon_darkest"
          width="3rem"
          left="95%"
          top="60%"
          hiddenMobile
        />
        <Icon
          icon="php"
          color="#8993be"
          width="3rem"
          left="67%"
          top="105%"
          hiddenMobile
        />
        <Icon
          icon="java"
          width="5rem"
          left="40%"
          top="70%"
          color="#5382a1"
          hiddenMobile
        />
        <Icon
          icon="vue"
          width="10rem"
          left="5%"
          top="92%"
          hiddenMobile
        />
        <Icon
          icon="javascript"
          width="4rem"
          left="70%"
          top="15%"
          hiddenMobile
        />
        <Icon
            icon="node"
            color="icon_darkest"
            width="4rem"
            left="92%"
            top="10%"
            hiddenMobile
          />
      </Fade>
      <UpDown>
        <Fade damping={0.2} triggerOnce cascade>
          <Icon
            icon="linux"
            width="6rem"
            left="90%"
            top="80%"
            hiddenMobile
          />
          <Icon
            icon="github"
            color="icon_darkest"
            width="8rem"
            left="60%"
            top="80%"
            hiddenMobile
          />
          <Icon
            icon="jekyll"
            color="icon_darkest"
            width="4rem"
            left="30%"
            top="80%"
            hiddenMobile
          />
          <Icon
            icon="react"
            width="10rem"
            left="65%"
            top="50%"
            hiddenMobile
          />
          <Icon
            icon="python"
            width="12rem"
            left="5%"
            top="3%"
            // color="#663399"
            hiddenMobile
          />
          </Fade>
        </UpDown>
        <UpDownWide>
        <Fade damping={0.2} triggerOnce cascade>
          <Icon
            icon="css"
            color="icon_darkest"
            width="4rem"
            left="78%"
            top="35%"
            hiddenMobile
          />
          <Icon
            icon="rollup"
            color="icon_darkest"
            width="2.5rem"
            left="3%"
            top="40%"
            hiddenMobile
          />
          <Icon
            icon="sass"
            width="8rem"
            left="28%"
            top="2%"
            hiddenMobile
          />
          <Icon
            icon="typescript"
            width="6rem"
            left="80%"
            top="10%"
            hiddenMobile
          />
          <Icon
            icon="nuxt"
            width="4rem"
            left="55%"
            top="20%"
            hiddenMobile
          />
        </Fade>
      </UpDownWide>
    </Divider>
    <Content sx={{ variant: `texts.bigger` }} speed={0.4} offset={offset} factor={factor}>
      <Inner>
        <Slide triggerOnce direction="left">
          <Intro />
        </Slide>
      </Inner>
    </Content>
  </div>
)

export default Hero
