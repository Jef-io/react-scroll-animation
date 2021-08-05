import React, { useEffect, useState } from "react";
import "./backgroundCircle.scss"


export const BackgroundCircle = ():JSX.Element => {

    const letters = Array.from("REACT|&|TYPESCRIPT|-|WEB|~|")
    const deg = 360/letters.length

    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", (e) => {
            setScroll(window.scrollY/10)
        })
    }, [])

    return (
        <div className={"circleContainer"}>
            <h2 className={"letterContainer"} style={{transform: `rotate(${scroll}deg)`}}>
            {letters.map((letter, id) => {
                return (
                    <span key={id + letter} style={{transform: `rotate(${deg*id}deg)`}} className={"letterCommon"}>{letter}</span>
                )
            })}
            </h2>
        </div>
    )
}