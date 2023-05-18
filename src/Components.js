import React from "react";
import { useState } from "react";
import { styled } from '@mui/material/styles';
import { Button, Stack, Box, Divider, Typography, IconButton, TextField, Icon } from "@mui/material";
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

const MenuItem = ({ item, addToCart, imgIdx }) => {

    const imageList = [
        require('./images/main/1.jpg'),
        require('./images/main/2.jpg'),
        require('./images/main/3.jpg'),
        require('./images/main/4.jpg'),
        require('./images/main/5.jpg'),
        require('./images/additional/1.jpg'),
        require('./images/additional/2.jpg'),
        require('./images/drinks/1.jpg'),
    ]

    const [notes, setNotes] = useState("")

    const testImg = <img src={imageList[imgIdx]}
        style={{
        width: '100%',
        maxHeight: '100%',
        objectFit: 'cover',
        borderRadius: '5px',
        border: '0.5px solid gray'
    }}
    />

    return (
        <Box sx={{
            width: '250px',
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
                    {testImg}
                </Box>
                <Divider/>
                <Box sx={{
                    paddingTop: '0.5rem',
                    paddingX: '1rem'
                }}>
                    <Stack direction="row" justifyContent="space-between">
                    <Title content={item.name}/>
                    <Price content={item.price}/>
                    </Stack>
                    <Typography fontSize={12}>{item.description}</Typography>
                    <Box height='1.2rem'/>
                    <Stack direction="row">  

                    <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { marginRight: 1, marginBottom: 1 },
                        '& .MuiInputLabel-root': {
                            fontSize: '12px',
                            zIndex: '-3'
                        },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <TextField
                        label="Notes"
                        id="outlined-size-small"
                        size="small"
                        value={notes}
                        onChange={(event) => {
                          setNotes(event.target.value);
                        }}
                        />
                        </Box>
                        <IconButton 
                        onClick={()=> {
                            addToCart(item, notes)
                            setNotes("")
                        }}
                        sx={{ padding:0 }}>                           
                        <AddCircleOutlineIcon/>
                        </IconButton>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}
/*
const MenuItem = ({ item, addToCart }) => {
    return (
        <div>
            <h3>{item.name}</h3>
            <h3>{item.price}</h3>
            <h3>{item.description}</h3>
            <button onClick={()=> addToCart(item)}>Add to Cart</button>
        </div>
    )
}
*/

export { CustomButton, MenuItem }  

