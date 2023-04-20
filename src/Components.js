import React from "react";
import { styled } from '@mui/material/styles';
import { Button } from "@mui/material";

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

export default CustomButton 

