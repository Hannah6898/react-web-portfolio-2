import React from "react";
import Particles from "react-particles-js";
import ParticlesConfig from "./config/particle-config";

export default function ParticleBackground() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        maxWidth: "100%",
        maxHeight: "100%",
        zIndex: "0",
      }}
    >
      <Particles params={ParticlesConfig}></Particles>;
    </div>
  );
}
