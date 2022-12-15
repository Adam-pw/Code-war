import React from "react";
import Particles from "react-tsparticles";
import particlesconfig from "./config/particlesconfig";
import particlesconfigmobile from "./config/particlesconfigmobile";
import { useState, useEffect } from 'react';
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticleBackground = () => {
  let fix;
  if (typeof window !== "undefined") {
    fix = window.innerWidth;
  }

  const [windowWidth, setWindowWidth] = useState(fix);

  const setWindowDimensions = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", setWindowDimensions);
    return () => {
      window.removeEventListener("resize", setWindowDimensions);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  if (windowWidth > 768) {
    return (
      <>
        <Particles params={particlesconfig} init={particlesInit}></Particles>
      </>
    );
  }
  return (
    <>
      <Particles params={particlesconfigmobile} init={particlesInit}></Particles>
    </>
  );
};

export default ParticleBackground;
