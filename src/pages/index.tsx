import * as React from "react";
import { Paragraph } from "../components/Paragraph";
import { Title } from "../components/Title";
import CSS from "csstype";
import "../style/global.scss";
import "../style/index.scss";
import { BackgroundCircle } from "../components/BackgroundCircle";

export interface paragraph {
  lines: Array<string>;
  style: CSS.Properties
}

const commonStyle: CSS.Properties = {
  display: "flex",
  flexDirection: "column",
}

const paragraphs: Array<paragraph> = [
  {lines: [
    "FRENCH DEVELOPPER",
    "WITH (some) DESIGNER SKILLS|.|",
    "MY CREATIONS ARE EASY-TO-USE|,|",
    "INTUITIVE AND FUNCTIONAL|.|"
  ],
  style: {
    margin: "30vh 10rem",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    ...commonStyle
  }},
  {lines: [
    "I CODE PURE AND CLEAN",
    "USER INTERFACES WITH",
    "SPACIOUS DESIGN|.|",
  ],
  style: {
    margin: "30vh 10rem 0 10rem",
    alignSelf: "flex-start",
    ...commonStyle
  }},
  {lines:[
    "I CODING WITH REACT |&| TYPESCRIPT",
    "AND OTHER PROGRAMMING LANGUAGES|.|"
  ],
  style: {
    margin: "5vh 10rem",
    alignSelf: "flex-start",
    ...commonStyle
  }},
  {lines: [
    "I|'|M INSPIRED BY DRIBBBLE",
    "OR AWWWARDS|,| AS WELL AS",
    "JEREMIE BAUDER|,| ANDY DUFRENOT|,|",
    "BUT NOT BY FABIEN|.|"
  ],
  style: {
    margin: "40vh 10rem",
    alignSelf: "flex-end",
    alignItems: "flex-end",
    ...commonStyle
  }}
]

// markup
const IndexPage = () => {
  return (
    <main >
      <title>Home Page</title>
      <BackgroundCircle />
      <div className={"content"}>
        <Title title={"Bonjour|!|"} />
        {paragraphs.map((paragraph) => <Paragraph key={paragraph.lines[0]} paragraph={paragraph} />)}
        <Title title={"Au revoir|!|"} />
      </div>
    </main>
  )
}

export default IndexPage
