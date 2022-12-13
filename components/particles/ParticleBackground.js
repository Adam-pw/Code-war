import React from "react";
import Particles from "react-tsparticles";
import particlesconfig from "./config/particlesconfig"
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticleBackground = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);
    return (
        <>
            <Particles params={particlesconfig}  init={particlesInit}></Particles>
        </>
    );
};

export default ParticleBackground;