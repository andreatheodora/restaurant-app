import React from "react";
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import { Container, Grid } from "@mui/material";
import { purple } from "@mui/material/colors";

function OrderPage() {
    return (
        <Container maxWidth>
            <Grid container>
                <Grid xs={5} backgroundColor={purple[50]}>
                    <h1>Hello</h1>
                </Grid>
                <Grid xs={7} backgroundColor={purple[200]}>
                    <h1>Hello</h1>
                </Grid>
            </Grid>
        </Container>
    );
}

export default OrderPage;