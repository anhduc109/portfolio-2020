/** @jsx jsx */
import { jsx } from "theme-ui";
import Divider from "@lekoarts/gatsby-theme-cara/src/elements/divider";
import Inner from "@lekoarts/gatsby-theme-cara/src/elements/inner";
import Content from "@lekoarts/gatsby-theme-cara/src/elements/content";
import SVG from "@lekoarts/gatsby-theme-cara/src/components/svg";
import {
  UpDown,
  UpDownWide,
} from "@lekoarts/gatsby-theme-cara/src/styles/animations";
// @ts-ignore

import ProjectsMDX from "../sections/projects";
import ProjectCard from "./project-card";
import SMS from "../images/sms-api.png";
import WEAR from "../images/wear.png";

const Projects = ({
  offset,
  factor = 2,
}: {
  offset: number;
  factor?: number;
}) => (
  <div>
    <Divider
      bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
      sx={{ clipPath: `polygon(0 15%, 100% 25%, 100% 85%, 0 75%)` }}
      speed={-0.2}
      offset={1.1}
      factor={factor}
    />
    <Content speed={0.4} offset={offset + 0.2} factor={factor}>
      <Inner>
        <div
          sx={{
            h2: { color: `white !important`, mb: 30 },
          }}
        >
          <h1
            sx={{
              fontSize: [5, 6],
              color: "heading",
              textShadow: "rgba(255,255,255,0.15) 0px 5px 35px",
            }}
          >
            Projects
          </h1>
          <ProjectCard
            title="Integrify's Student Management System API"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg={SMS}
            isImageLeft={true}
            githubLink="/buncha"
            children="SMS is a new internal, online tool which is used by Integrify to manage hundreds of students, courses and the existing ESR tool - online testing of applicants. I'm working as an occasional Scrum Master and a Backend Developer with 4 other teammates."
            techStack="Node.js NestJS REST API TypeScript PostgreSQL TypeORM Jest Github Actions Docker"
          />
          <ProjectCard
            title="WEAR"
            link="https://www.behance.net/gallery/58937147/Freiheit"
            bg={WEAR}
            isImageLeft={false}
            githubLink="/buncha"
            children="A well designed E-Commerce website in clothing fashion inspired by Zara with Google log-in system, protected admin/user routes in both backend/frontend"
            techStack="React with Hooks TypeScript Redux Redux Saga/Thunk Material UI Node.js Express Passport JWT"
          />
        </div>
      </Inner>
    </Content>
    <Divider speed={0.1} offset={offset} factor={factor}>
      <UpDown>
        <SVG icon="box" width={6} color="icon_brightest" left="85%" top="75%" />
        <SVG icon="upDown" width={8} color="icon_teal" left="70%" top="20%" />
        <SVG
          icon="triangle"
          width={8}
          stroke
          color="icon_orange"
          left="25%"
          top="5%"
        />
        <SVG
          icon="circle"
          hiddenMobile
          width={24}
          color="icon_brightest"
          left="17%"
          top="60%"
        />
      </UpDown>
      <UpDownWide>
        <SVG
          icon="arrowUp"
          hiddenMobile
          width={16}
          color="icon_green"
          left="20%"
          top="90%"
        />
        <SVG
          icon="triangle"
          width={12}
          stroke
          color="icon_brightest"
          left="90%"
          top="30%"
        />
        <SVG
          icon="circle"
          width={16}
          color="icon_yellow"
          left="70%"
          top="90%"
        />
        <SVG
          icon="triangle"
          hiddenMobile
          width={16}
          stroke
          color="icon_teal"
          left="18%"
          top="75%"
        />
        <SVG
          icon="circle"
          width={6}
          color="icon_brightest"
          left="75%"
          top="10%"
        />
        <SVG
          icon="upDown"
          hiddenMobile
          width={8}
          color="icon_green"
          left="45%"
          top="10%"
        />
      </UpDownWide>
      <SVG
        icon="circle"
        hiddenMobile
        width={6}
        color="icon_brightest"
        left="4%"
        top="20%"
      />
      <SVG icon="circle" width={12} color="icon_pink" left="80%" top="60%" />
      <SVG icon="box" width={6} color="icon_orange" left="10%" top="10%" />
      <SVG icon="box" width={12} color="icon_yellow" left="29%" top="26%" />
      <SVG
        icon="hexa"
        width={16}
        stroke
        color="icon_red"
        left="75%"
        top="30%"
      />
      <SVG
        icon="hexa"
        width={8}
        stroke
        color="icon_yellow"
        left="80%"
        top="70%"
      />
    </Divider>
  </div>
);

export default Projects;
