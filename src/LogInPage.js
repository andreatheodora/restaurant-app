import React from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import { Link } from "react-router-dom";
import { Container, Grid, Typography, Box, Button, CssBaseline, Stack, IconButton } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Heading, Subheading } from "./Typography"
import { CustomButton, MenuItem } from "./Components"
import restaurantbg from "./images/restaurantbg.jpg"

function LogInPage() {
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
                    <Heading content="Please, log in!"/>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                          <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={staff}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Staff" />}
                          />
                    <div>
                        <TextField
                        id="outlined-textarea"
                        label="Email"
                        placeholder="Name"
                        multiline
                        />
                        <TextField
                        id="outlined-textarea"
                        label="Password"
                        placeholder="Price"
                        multiline
                        />
                    </div>
                    <Link to="/menu">
                    <Button variant="contained">Log In</Button>
                    </Link>
                </Box>
                </Grid>
               
            </Grid>
        </Grid>
        </Container>
    </ThemeProvider>
    );
}

const staff = [
  { label: 'Supervisor' },
  { label: 'Cashier'},
  { label: 'Kitchen Staff'}
];

export default LogInPage;

