import React from "react";
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import { Container, Grid, Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Heading, Subheading } from "./Typography"
import CustomButton from "./Components"
import restaurantbg from "./images/restaurantbg.jpg"

function LandingPage() {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth sx={{
                margin: 0,
                paddingBottom: '3rem'
            }}>
            <Grid container spacing={0}>
                <Grid item xs={5} >
                    <img src={restaurantbg} width='100%' alt='background'></img>
                </Grid>
                <Grid container 
                xs={7} 
                direction="column"
                justifyContent="space-between"
                alignItems="flex-start"
                paddingLeft='3rem'
                paddingBottom='0.5rem'
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
                        <CustomButton>Browse menu</CustomButton>
                    </Grid>
                   
                    <Link to="/order">Login as Restaurant</Link>
                </Grid>
            </Grid>
            </Container>
        </ThemeProvider>
    );
}

export default LandingPage;