import { React, useState } from "react";
import { ThemeProvider } from '@emotion/react';
import PropTypes from 'prop-types';
import theme from "./theme";
import { Container, Box, CssBaseline, Stack, Tab, Tabs, Typography, Grid, Switch } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { Custombutton, OrderList } from "./Components";
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

function OrederRiview() {
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
                        <Tab label="Orders" style={value == 0 ? activeTab : {}}></Tab>
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
                        <OrderList src={restaurantbg} name="Table 1" price="10000" />
                        <OrderList src={restaurantbg} name="Table 2" price="10000" />
                        <OrderList src={restaurantbg} name="Table 3" price="10000" />
                        <OrderList src={restaurantbg} name="Table 4" price="10000" />
                    </Grid>
                </TabPanel>

            </Container>
        </ThemeProvider> 
    );
}

export default OrederRiview;