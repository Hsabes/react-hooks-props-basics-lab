import React from "react";

function About(props) {
  if (!props.bio) {
    return (
      <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={props.links.github}>https://github.com/liza</a>
      <a href={props.links.linkedin}>https://www.linkedin.com/in/liza/</a>
    </div>
    );
  } else {
    return (
      <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <h3>Links</h3>
      <a href={props.links.github}>https://github.com/liza</a>
      <a href={props.links.linkedin}>https://www.linkedin.com/in/liza/</a>
    </div>
    )
  }
}

export default About;
