import { React, useState } from "react";
import { ThemeProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import theme from "./theme";
import { Container, Box, CssBaseline, Stack, Tab, Tabs, Typography, Grid } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { MenuItem } from "./Components";
import restaurantbg from "./images/restaurantbg.jpg";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

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

function OrderPage() {
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
                        <Tab label="Main" index={0} style={value == 0 ? activeTab : {}}></Tab>
                        <Tab label="Appetizer" index={1} style={value == 1 ? activeTab : {}}></Tab>
                        <Tab label="Beverage" index={2} style={value == 2 ? activeTab : {}}></Tab>
                        <Tab label="Dessert" index={3} style={value == 3 ? activeTab : {}}></Tab>
                    </Tabs>
                </Stack>

            </Box>
            <Container 
            sx={{
                paddingY: '1rem',

            }}>
                <TabPanel value={value} index={0}>
                    <Grid container direction='row' justifyContent='space-evenly' gap={4}>
                        <MenuItem src={restaurantbg} name="Aglio Olio" price="10000" amount={1}/>
                        <MenuItem src={restaurantbg} name="Aglio Olio" price="10000" amount={0}/>
                        <MenuItem src={restaurantbg} name="Aglio Olio" price="10000"/>
                        <MenuItem src={restaurantbg} name="Aglio Olio" price="10000"/>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <MenuItem src={restaurantbg} name="Calamari" price="10000"/>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <MenuItem src={restaurantbg} name="Chocolate milkshake" price="10000"/>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <MenuItem src={restaurantbg} name="Panna cotta" price="10000"/>
                </TabPanel>

            </Container>
        </ThemeProvider> 
    );
}

export default OrderPage;