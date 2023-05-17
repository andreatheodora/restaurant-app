import React from "react";
import { styled } from '@mui/material/styles';
import { Button, Stack, Box, Divider, Typography, IconButton, Icon, Switch } from "@mui/material";
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Title, Price } from "./Typography";

const CustomButton = styled(Button)(({ theme }) => ({
        textTransform: 'none',
        fontSize: 30,
        fontWeight: 600,
        borderRadius: 8,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        },
}));

const AddMenuButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 400,
    borderRadius: 8,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: theme.palette.primary.light,
    '&:hover': {
        backgroundColor: theme.palette.secondary.main
    },
}));
    

function MenuItem(props) {
    return (
        <Box sx={{
            width: '250px',
            height: '300px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
            <Stack direction="column">
                <Box sx={{
                    height: '200px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    padding: '0.75rem'
                }}>
                    <img src={props.src} style={{
                        width: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                        borderRadius: '5px',
                        border: '0.5px solid gray'
                    }}></img>

                </Box>
                <Divider/>
                <Box sx={{
                    height:'100px',
                    paddingTop: '0.5rem',
                    paddingX: '1rem'
                }}>
                    <Stack direction="row" justifyContent="space-between">
                    <Title content={props.name}/>
                    <Price content={props.price}/>
                    </Stack>
                    <Typography fontSize={12}>Description of food.</Typography>
                    <Box height='1.2rem'/>
                    <Stack direction="row">  
                        <IconButton sx={{ padding:0 
                        }}>
                            <RemoveCircleOutlineIcon/>
                        </IconButton>
                        <Typography>{props.amount}</Typography>
                        <IconButton sx={{ padding:0 
                        }}>                           
                            <AddCircleOutlineIcon/>
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

function MenuItemStaff(props) {
    return (
        <Box sx={{
            width: '250px',
            height: '300px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
            <Stack direction="column">
                <Box sx={{
                    height: '200px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    padding: '0.75rem'
                }}>
                    <img src={props.src} style={{
                        width: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                        borderRadius: '5px',
                        border: '0.5px solid gray'
                    }}></img>

                </Box>
                <Divider/>
                <Box sx={{
                    height:'100px',
                    paddingTop: '0.5rem',
                    paddingX: '1rem'
                }}>
                    <Stack direction="row" justifyContent="space-between">
                    <Title content={props.name}/>
                    <Price content={props.price}/>
                    </Stack>
                    <Typography fontSize={12}>Description of food.</Typography>
                    <Box height='1.2rem'/>
                    <Stack direction="row">  
                    <Switch defaultChecked />
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

function OrderList(props) {
    return (
        <Box sx={{
            width: '250px',
            height: '300px',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
            <Stack direction="column">
                <Box sx={{
                    height: '200px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    padding: '0.75rem'
                }}>
                    <img src={props.src} style={{
                        width: '100%',
                        maxHeight: '100%',
                        objectFit: 'cover',
                        borderRadius: '5px',
                        border: '0.5px solid gray'
                    }}></img>

                </Box>
                <Divider/>
                <Box sx={{
                    height:'100px',
                    paddingTop: '0.5rem',
                    paddingX: '1rem'
                }}>
                    <Stack direction="row" justifyContent="space-between">
                    <Title content={props.name}/>
                    <Price content={props.price}/>
                    </Stack>
                    <Typography fontSize={12}>Order List</Typography>
                    <Box height='1.2rem'/>
                    <Stack direction="row">
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}

export { OrderList, CustomButton, AddMenuButton, MenuItem, MenuItemStaff }  

