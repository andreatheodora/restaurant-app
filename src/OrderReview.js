import * as React from 'react';
import useState from "react";
import { ThemeProvider } from '@emotion/react';
import theme from "./theme";
import { Container, Box, Button, CssBaseline, Stack, Tab, Tabs, Typography, Grid, Switch } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Heading, Subheading } from "./Typography"


function createData(orderid, date, table, totalprice, status, price) {
  return {
    orderid,
    date,
    table,
    totalprice,
    status,
    price,
    order: [
      {
        item: 'Nasi Ayam Penyet',
        amount: 2,
      },
      {
        item: 'Nasi Bebek Penyet',
        amount: 1,
      },
      {
        item: 'Teh Manis Dingin',
        amount: 3,
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.orderid}
        </TableCell>
        <TableCell align="right">{row.date}</TableCell>
        <TableCell align="right">{row.table}</TableCell>
        <TableCell align="right">{row.totalprice}</TableCell>
        <TableCell align="right">{row.status}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Order
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Item</TableCell>
                    <TableCell align="center">Amount</TableCell>
                    <TableCell align="center">Price (Rp)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.order.map((orderRow) => (
                    <TableRow key={orderRow.date}>
                      <TableCell>{orderRow.item}</TableCell>
                      <TableCell align="center">{orderRow.amount}</TableCell>
                      <TableCell align="center">
                        {Math.round(orderRow.amount * row.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    date: PropTypes.string.isRequired,
    table: PropTypes.string.isRequired,
    totalprice: PropTypes.string.isRequired,
    order: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        item: PropTypes.string.isRequired,
      }),
    ).isRequired,
    orderid: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('1', '29/12/2023', 'Table 1', 'Rp 300.000', 'done', 50000),
  createData('2', '29/12/2023', 'Table 2', 'Rp 200.000', 'done', 40000),
  createData('3', '29/12/2023', 'Table 2', 'Rp 100.000', 'on process', 40000),
  createData('4', '29/12/2023', 'Table 3', 'Rp 400.000', 'on process', 30000),
  createData('5', '29/12/2023', 'Table 8', 'Rp 250.000', 'on process', 45000),
];

export default function OrderReview() {
    return (
     
            <TableContainer component={Paper}>
                <Heading content="Orders"/>
                <Table aria-label="collapsible table">
                    <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>OrderID</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Table</TableCell>
                        <TableCell align="right">Total Price</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <Row key={row.orderid} row={row} />
                    ))}
                    </TableBody>
                </Table>
                <Grid container direction='row' justifyContent='flex-end' gap={4}>
                    <Link to="/menu">
                      <Button variant="contained">Back</Button>
                    </Link>
                </Grid>
                </TableContainer>
                
    );
}

