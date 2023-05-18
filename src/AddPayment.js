import React from "react";
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import { Container, Grid, Typography, Box, Button, CssBaseline, Stack, IconButton } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Heading, Subheading } from "./Typography"
import restaurantbg from "./images/restaurantbg.jpg"
import { AddMenuButton, MenuItemStaff } from "./Components";
import { Link, useHistory } from "react-router-dom";

function AddPayment() {
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
                    <Heading content="Add Payment Method!"/>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                    <div>
                        <TextField
                        id="outlined-textarea"
                        label="Name"
                        placeholder="Name"
                        multiline
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Account Number"
                        placeholder="Account Number"
                        multiline
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Discount"
                        placeholder="Discount"
                        multiline
                        />
                        <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        />
                    </div>
                    <Typography fontSize={16}>Please insert picture</Typography>
                    <Stack direction="row">  
                        <IconButton>
                            <AddPhotoAlternateIcon sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Stack>
                    <Link to="/paymentmethod">
                        <AddMenuButton>Submit</AddMenuButton>
                    </Link>
                </Box>
                </Grid>
               
            </Grid>
        </Grid>
        </Container>
    </ThemeProvider>
    );
}

export default AddPayment;

