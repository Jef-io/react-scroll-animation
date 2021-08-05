import React from "react";
import "./title.scss";

export const Title = ({title}: {title: string}):JSX.Element => {


    return (
        <h1>{title}</h1>
    )
}