import React from "react";
import "./Home.css";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Home() {
  return (
    <div className="Home">
      <h3>Hi there!</h3>
      <h1>I'm Hannah Osibodu</h1>
      <h3>A Software Developer based in the UK</h3>
      <ul>
        <li>
          <a src="#">About</a>
        </li>
        <li>
          <a src="#">Projects</a>
        </li>
        <li>
          <a src="#">Contact</a>
        </li>
        <li>
          <a src="#">CV</a>
        </li>
      </ul>
      <AiFillLinkedin />
      <AiFillGithub />
    </div>
  );
}
