/** @jsx jsx */
import React from "react";
import { jsx, useColorMode } from "theme-ui";

type ProjectCardProps = {
  link: string;
  title: string;
  children: React.ReactNode;
  bg: string;
  isImageLeft: boolean;
  githubLink: string;
  techStack: string;
};

const ProjectCard = ({
  link,
  title,
  children,
  bg,
  isImageLeft,
  githubLink,
  techStack,
}: ProjectCardProps) => {
  const colorMode = useColorMode();

  return (
    <div
      sx={{
        display: `grid`,
        gridGap: [4, 4, 4, 5],
        gridTemplateColumns: [`1fr`, `1fr`, `repeat(2, 1fr)`],
        gridAutoFlow: "dense",
        mb: 50,
      }}
    >
      <a
        href={link}
        target="_blank"
        onClick={() => {
          link === "#" && event.preventDefault();
        }}
        sx={{
          width: `100%`,
          boxShadow: `lg`,
          position: `relative`,
          textDecoration: `none`,
          borderRadius: `lg`,
          color: `text`,
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: [200, 200, 300],
          cursor: "pointer",
          transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
          "&:hover": {
            color: `white !important`,
            transform: `translateY(-5px)`,
            boxShadow: `xl`,
          },
          gridColumn: [1, 1, isImageLeft ? 1 : 2],
        }}
      ></a>
      <div
        sx={{
          textAlign: ["left", "left", isImageLeft ? "right" : "left"],
        }}
      >
        <div
          sx={{
            textTransform: `uppercase`,
            letterSpacing: `wide`,
            color: "heading",
            fontSize: [3, 4],
            fontWeight: `medium`,
            lineHeight: 1,
          }}
        >
          {title}
        </div>
        <div sx={{ mt: "10px" }}>{children}</div>
        <div sx={{ mt: "30px" }}>{techStack}</div>
        <div sx={{ mt: "10px" }}>
          <a
            sx={{ mr: "10px" }}
            href={githubLink}
            target="_blank"
            onClick={() => {
              link === "#" && event.preventDefault();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={colorMode[0] == "dark" ? "white" : "black"}
              sx={{
                transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
                "&:hover": {
                  color: `white !important`,
                  transform: `translateY(-5px)`,
                  boxShadow: `xl`,
                },
              }}
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            sx={{ ml: "10px" }}
            href={link}
            target="_blank"
            onClick={() => {
              link === "#" && event.preventDefault();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 194.818 194.818"
              width="24"
              height="24"
              fill={colorMode[0] == "dark" ? "white" : "black"}
              sx={{
                transition: `all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important`,
                "&:hover": {
                  color: `white !important`,
                  transform: `translateY(-5px)`,
                  boxShadow: `xl`,
                },
              }}
            >
              <g>
                <path d="M185.818,2.161h-57.04c-4.971,0-9,4.029-9,9s4.029,9,9,9h35.312l-86.3,86.3c-3.515,3.515-3.515,9.213,0,12.728 c1.758,1.757,4.061,2.636,6.364,2.636s4.606-0.879,6.364-2.636l86.3-86.3v35.313c0,4.971,4.029,9,9,9s9-4.029,9-9v-57.04 C194.818,6.19,190.789,2.161,185.818,2.161z"></path>
                <path d="M149,77.201c-4.971,0-9,4.029-9,9v88.456H18v-122h93.778c4.971,0,9-4.029,9-9s-4.029-9-9-9H9c-4.971,0-9,4.029-9,9v140 c0,4.971,4.029,9,9,9h140c4.971,0,9-4.029,9-9V86.201C158,81.23,153.971,77.201,149,77.201z"></path>
              </g>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
