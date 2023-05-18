import { React, useState } from "react";
import { ThemeProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import theme from "./theme";
import { Container, Box, CssBaseline, Stack, Tab, Tabs, Typography, Grid, Switch } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { AddMenuButton, MenuItemStaff } from "./Components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ayam from "./images/ayam.jpeg";
import bebek from "./images/bebek.jpeg";
import lele from "./images/lele.jpeg";
import udang from "./images/udang.jpeg";
import nasiputih from "./images/nasiputih.jpeg";
import lalapan from "./images/lalapan.jpeg";
import teh from "./images/teh.jpeg";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3}}>
                    <Typography>{children}</Typography>
                </Box>
            )}

        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
}

function MenuReview() {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    const activeTab = {
        backgroundColor:'white',
        height:'3rem',
        borderRadius: '20px 20px 0 0'
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Box sx={{
                backgroundColor: theme.palette.primary.light,
                paddingLeft: '2rem',
            }}>
                <Stack direction="row">
                    <Tabs value={value} onChange={handleChange}
                    indicatorColor="none">
                        <Link to="/menu">
                        <Tab label="Menu" style={value == 0 ? activeTab : {}}></Tab>
                        </Link>
                        <Link to="/orderreview">
                        <Tab label="Orders"></Tab>
                        </Link>
                        <Link to="/paymentmethod">
                        <Tab label="Payment Method"></Tab>
                        </Link>
                        <Link to="/salesreport">
                        <Tab label="Sales Report"></Tab>
                        </Link>
                    </Tabs>
                </Stack>

            </Box>
            <Box sx={{
                backgroundColor: theme.palette.primary.light,
                paddingLeft: '2rem',
            }}>
                <Stack direction="row">
                    <Tabs value={value} onChange={handleChange}
                    indicatorColor="none">
                        <Tab label="Main" index={0} style={value == 0 ? activeTab : {}}></Tab>
                        <Tab label="additional menu" index={1} style={value == 1 ? activeTab : {}}></Tab>
                        <Tab label="Beverage" index={2} style={value == 2 ? activeTab : {}}></Tab>
                    </Tabs>
                </Stack>

            </Box>
            <Container 
            sx={{
                paddingY: '1rem',

            }}>
                <TabPanel value={value} index={0}>
                    <Grid container direction='row' justifyContent='space-evenly' gap={4}>
                        <MenuItemStaff src={lele} name="Nasi Lele Penyet" price="Rp 28.750" />
                        <MenuItemStaff src={bebek} name="Nasi Bebek Penyet" price="Rp 43.750" />
                        <MenuItemStaff src={udang} name="Nasi Udang Penyet" price="Rp 35.000" />
                        <MenuItemStaff src={ayam} name="Nasi Ayam Penyet" price="Rp 31.875" />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container direction='row' justifyContent='flex-start' gap={4}>
                        <MenuItemStaff src={nasiputih} name="Nasi Putih" price="Rp 9.375" />
                        <MenuItemStaff src={lalapan} name="Lalapan" price="Rp 12.500" />
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MenuItemStaff src={teh} name="Teh Manis Panas/Dingin" price="Rp 7.500" />
                </TabPanel>
                
                <Grid container direction='row' justifyContent='flex-start' gap={4}>
                    <Link to="/addmenu">
                        <AddMenuButton>Add menu</AddMenuButton>
                    </Link>
                    <Link to="/editmenu">
                        <AddMenuButton>Edit menu</AddMenuButton>
                    </Link>
                </Grid>
                

            </Container>

        </ThemeProvider> 
    );
}

export default MenuReview;