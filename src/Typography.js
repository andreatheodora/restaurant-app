import { Typography } from "@mui/material";
import React from "react";

function Heading(props) {
    return <Typography fontSize={50} fontWeight={800} color={props.textColor}>{props.content}</Typography>
}

function Subheading(props) {
    return <Typography fontSize={24} fontWeight={600} color={props.textColor}>{props.content}</Typography>
}

export { Heading, Subheading }