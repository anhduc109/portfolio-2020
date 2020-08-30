import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Layout from "@lekoarts/gatsby-theme-cara/src/components/layout";
import Hero from "@lekoarts/gatsby-theme-cara/src/components/hero";
import Projects from "@lekoarts/gatsby-theme-cara/src/components/projects";
import About from "@lekoarts/gatsby-theme-cara/src/components/about";
import Contact from "@lekoarts/gatsby-theme-cara/src/components/contact";

const Cara = () => {
  const isMobileSize = window && window.innerWidth < 768;
  return (
    <Layout>
      <Parallax pages={isMobileSize ? 6 : 5}>
        <Hero offset={0} factor={1} />
        <About offset={1} factor={1} />
        <Projects
          offset={isMobileSize ? 2.5 : 2}
          factor={isMobileSize ? 2.2 : 1.8}
        />
        <Contact offset={isMobileSize ? 5 : 4} factor={1} />
      </Parallax>
    </Layout>
  );
};

export default Cara;
