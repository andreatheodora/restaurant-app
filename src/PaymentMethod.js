import { React, useState } from "react";
import { ThemeProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import theme from "./theme";
import { Container, Box, CssBaseline, Stack, Tab, Tabs, Typography, Grid, Switch } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { AddMenuButton, MenuItemStaff } from "./Components";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import cash from "./images/cash.jpeg";
import gopay from "./images/gopay.png";
import qris from "./images/qris.png";
import bca from "./images/bca.png";

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
                        <Tab label="Menu"></Tab>
                        </Link>
                        <Link to="/orderreview">
                        <Tab label="Orders"></Tab>
                        </Link>
                        <Link to="/paymentmethod">
                        <Tab label="Payment Method" style={value == 0 ? activeTab : {}}></Tab>
                        </Link>
                        <Link to="/salesreport">
                        <Tab label="Sales Report"></Tab>
                        </Link>
                    </Tabs>
                </Stack>

            </Box>
            
            <Container 
            sx={{
                paddingY: '1rem',

            }}>
                <TabPanel value={value} index={0}>
                    <Grid container direction='row' justifyContent='space-evenly' gap={4}>
                        <MenuItemStaff src={cash} name="Cash"/>
                        <MenuItemStaff src={qris} name="Qris"/>
                        <MenuItemStaff src={gopay} name="Gopay"/>
                        <MenuItemStaff src={bca} name="Debit"/>
                    </Grid>
                </TabPanel>
                
                <Grid container direction='row' justifyContent='flex-start' gap={4}>
                    <Link to="/addpayment">
                        <AddMenuButton>Add</AddMenuButton>
                    </Link>
                    <Link to="/editpayment">
                        <AddMenuButton>Edit</AddMenuButton>
                    </Link>
                </Grid>
                

            </Container>

        </ThemeProvider> 
    );
}

export default MenuReview;