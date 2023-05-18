import { React, useState, useEffect } from "react";
import { ThemeProvider } from '@emotion/react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import theme from "./theme";
import { Container, Box, CssBaseline, Stack, Tab, Tabs, Typography, Grid, Fab, Divider, IconButton, Button } from "@mui/material";
import { MenuItem } from "./Components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';

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

const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity (0.5) to control darkness
};



const Cart = ({ cartItems, total, deleteFromCart}) => {
    
    const cartStyle = {
        width: '50%',
        position: 'fixed', 
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '20px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)'
    }
    
    return (
    <>
        <div style={cartStyle}>
        <h2>Cart</h2>
        {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
        ) : (
            <Stack
                direction="column"
                divider={<Divider orientation="horizontal" flexItem/>}
                spacing={2}
            >
            {cartItems.map((item) => (
                <Stack direction="row" justifyContent="space-between">
                    <Stack>
                        <Typography>{item.name}</Typography>
                        <Typography sx={{
                            fontSize: '14px',
                        }}
                        >{item.notes}</Typography>                        
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography>Rp. {item.price}</Typography>
                        <IconButton aria-label="delete" onClick={()=>deleteFromCart(item.id, item.price)}>
                            <DeleteIcon />
                        </IconButton>
                    </Stack>
                </Stack>
            ))}
            <Stack direction="row" justifyContent="space-between">
                <Typography>Total</Typography>
                <Typography>Rp. {total}</Typography>
            </Stack>
            
             <Button>
                Pay
             </Button>
            
            </Stack>
        )}
        </div>

    </>
    );
  };

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
}

function OrderPage() {
    const [value, setValue] = useState(0) //for tabbing

    const [showCart, setShowCart] = useState(false) 

    const [cartItems, setCartItems] = useState([]);

    const [total, setTotal] = useState(0)

    const [itemId, setItemId] = useState(0)

    const addToCart = (item, notes) => {
        const order = { id: itemId, name: item.name, price: item.price, notes: notes }
        setCartItems([...cartItems, order])
        setTotal((total) => total+parseInt(item.price, 10))
        setItemId((itemId) => itemId+1)
    };

    const deleteFromCart = (id, price) => {
        const newList = cartItems.filter((item) => item.id !== id)
        setCartItems(newList)
        setTotal((total) => total-parseInt(price, 10))
    }

    const menuItems = [
        { id: 1, name: 'Nasi ayam penyet', description: '', price: '31875', imgSrc: './images/main/1.jpg' },
        { id: 2, name: 'Nasi bebek penyet', description: '', price: '43750', imgSrc: './images/main/2.jpg' },
        { id: 3, name: 'Nasi udang penyet', description: '', price: '35000', imgSrc: './images/main/3.jpg' },
        { id: 3, name: 'Nasi nila penyet', description: '', price: '31250', imgSrc: './images/main/3.jpg' },
        { id: 3, name: 'Nasi lele penyet', description: '', price: '28750', imgSrc: './images/main/3.jpg' },
      ];

    const additionalItems = [
        { id: 1, name: 'Lalapan', description: '', price: '12500', imgSrc: './images/additional/1.jpg'},
        { id: 2, name: 'Nasi putih', description: '', price: '9375', imgSrc: './images/additional/2.jpg'},
    ]

    const drinks = [
        { id: 1, name: 'Teh panas', description: '', price: '7500', imgSrc: './images/drinks/1.jpg'},

    ]


    const handleChange = (event, newValue) => {
        setValue(newValue)
    };

    const handleClick = () => {
        setShowCart(!showCart)
    }

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
                        <Tab label="Main" index={0} style={value === 0 ? activeTab : {}}></Tab>
                        <Tab label="Additional" index={1} style={value === 1 ? activeTab : {}}></Tab>
                        <Tab label="Drinks" index={2} style={value === 2 ? activeTab : {}}></Tab>
                    </Tabs>
                </Stack>

            </Box>
            <Container 
            sx={{
                paddingY: '1rem',
            }}>

                <Fab variant="extended" onClick={handleClick}>
                    {showCart ? <CloseIcon sx={{ mr: 1 }}/> : <ShoppingCartIcon sx={{ mr: 1 }}/>}
                    {showCart ? 'Close' : 'My order'}
                </Fab>
                {showCart && <div style={overlayStyle}></div>}

                <TabPanel value={value} index={0}>
                    <Grid container direction='row' justifyContent='flex-start' gap={4}>
                    {menuItems.map((item,idx) => {
                        return (
                            <MenuItem key={item.id}
                            item={item} 
                            addToCart={addToCart}
                            imgIdx={idx}
                            />
                        )
                    }
                    )}
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Grid container direction='row' justifyContent='flex-start' gap={4}>
                    {additionalItems.map((item,idx) => {
                        return (
                            <MenuItem key={item.id}
                            item={item} 
                            addToCart={addToCart}
                            imgIdx={idx+menuItems.length}
                            />
                        )
                    }
                    )}              
                    </Grid>  
                    </TabPanel>
                <TabPanel value={value} index={2}>
                    <Grid container direction='row' justifyContent='flex-start' gap={4}>
                    {drinks.map((item,idx) => {
                        return (
                            <MenuItem key={item.id}
                            item={item} 
                            addToCart={addToCart}
                            imgIdx={idx+additionalItems.length+menuItems.length}
                            />
                        )
                    }
                    )}              
                    </Grid> 
                </TabPanel>
  

            </Container>
            {showCart && <Cart cartItems={cartItems} total={total} deleteFromCart={deleteFromCart}/>}

        </ThemeProvider> 
    );
}

export default OrderPage;