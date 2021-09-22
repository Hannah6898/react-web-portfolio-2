import React from "react";
import HeroImg from "./Hero-img.png";

const Hero = () => {
  return (
    <div>
      <h1>Aspiring Junior Developer seeking role with React</h1>
      <h2>
        Skilled in React and JavaScript, currently looking for my first role
        within the tech industry{" "}
      </h2>
      <button>Let's Chat</button>
      <img src={HeroImg}></img>
    </div>
  );
};

export default Hero;
