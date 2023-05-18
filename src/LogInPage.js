import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from "framer-motion";

import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import { Container, Grid, Typography, Box, Button, CssBaseline } from "@mui/material";
import { Link } from "react-router-dom";
import { Heading, Subheading } from "./Typography"
import { CustomButton, MenuItem } from "./Components"
import restaurantbg from "./images/restaurantbg.jpg"


const LogInPage = () => {

  const { loginWithRedirect } = useAuth0()
  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  const variants2 = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };
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
                 <div className="w-full h-full relative">
         <div className="absolute bg-orange-300 w-full rounded-bl-full opacity-30 right-0 h-full loginBg" ></div>
       <div className="flex container m-auto ">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ type: "spring", delay: 0.5 }}
        className="flex flex-col justify-center w-1/3 "
      >
        <h1 className="text-center font-semibold text-2xl">Restauran Admin Panel</h1>
        {<form action="" className="flex flex-col justify-center">
          <label htmlFor="name" className="text-gray-400 my-1 ">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="enter name"
            className="border-2 outline-0 rounded-lg px-20 py-1.5"
          />
          <label htmlFor="password" className="text-gray-400  my-1">
            Email
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter password"
            className="border-2  outline-0 rounded-lg px-20 py-1.5"
          />

        </form>}
        <Link to="/menu">
          <button className="rounded py-1.5 px-12  mx-auto my-4  transition-all duration-1000 ease-out bg-orange-500 hover:bg-orange-700   text-red-50 outline-none   font-semibold ">
            Log in
          </button>
        </Link>
      </motion.div>

      <div className="items-end w-2/3 flex flex-col justify-center ">
      </div>
    </div>
    </div>   
                   
                  
                </Grid>
            </Grid>
            </Container>
        </ThemeProvider>
  );
};

export default LogInPage;