import React from "react";
import { paragraph } from "../pages";
import "./paragraph.scss"

export const Paragraph = ({paragraph}:{paragraph: paragraph}):JSX.Element => {

    return (
        <div style={paragraph.style}>
            {paragraph.lines.map((line) => <p>{line}</p>)}
        </div>
    )
}