import React from "react";
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import { Typography } from "@mui/material";

function NotFoundPage() {
    return (
        <ThemeProvider theme={theme}>
           <Typography fontWeight={600}>404 Page Not Found</Typography>
        </ThemeProvider>
    );
}

export default NotFoundPage;