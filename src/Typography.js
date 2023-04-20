import { Typography } from "@mui/material";
import React from "react";

function Heading(props) {
    return <Typography fontSize={50} fontWeight={800} color={props.textColor}>{props.content}</Typography>
}

function Subheading(props) {
    return <Typography fontSize={24} fontWeight={600} color={props.textColor}>{props.content}</Typography>
}

function Title(props) {
    return <Typography fontSize={14} fontWeight={600}>{props.content}</Typography>
}

function Price(props) {
    return <Typography fontSize={12} fontWeight={300} color='gray'>{props.content}</Typography>
}

export { Heading, Subheading, Title, Price }