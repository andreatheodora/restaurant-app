import React from "react";
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import { Container, Grid, Typography, Box, Button, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import { Heading, Subheading } from "./Typography"
import { CustomButton, MenuItem } from "./Components"
import restaurantbg from "./images/restaurantbg.jpg"

function LandingPage() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container maxWidth sx={{
                margin: 0,
            }}>
            <Grid container>
                <Grid item xs={5}>
                    <img src={restaurantbg} width='100%' alt='background'></img>
                </Grid>
                <Grid container 
                xs={7} 
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
                paddingLeft='3rem'
                >
                    <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="flex-start"
                    >
                        <Box sx={{
                            height: '40vh'
                        }}></Box>
                        <Heading content="Welcome!"/>
                        <Link to="/order">
                            <CustomButton>Browse menu</CustomButton>
                        </Link>
                    </Grid>
                   
                    <Link to="/restaurant">Login as Restaurant</Link>
                </Grid>
            </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default LandingPage;