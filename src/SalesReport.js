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


function createData(date, totalincome, totalorder, busyhour, favitem, price) {
  return {
    date,
    totalincome,
    totalorder,
    busyhour,
    favitem,
    price,
    payment: [
      {
        method: 'Cash',
        frequency: 20,
      },
      {
        method: 'Debit',
        frequency: 15,
      },
      {
        method: 'Gopay',
        frequency: 35,
      },
      {
        method: 'Qris',
        frequency: 30,
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
          {row.date}
        </TableCell>
        <TableCell align="right">{row.totalincome}</TableCell>
        <TableCell align="right">{row.totalorder}</TableCell>
        <TableCell align="right">{row.busyhour}</TableCell>
        <TableCell align="right">{row.favitem}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Payment Methods
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Method</TableCell>
                    <TableCell align="center">frequency</TableCell>
                    <TableCell align="center">Total Payment (Rp)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.payment.map((orderRow) => (
                    <TableRow key={orderRow.date}>
                      <TableCell>{orderRow.method}</TableCell>
                      <TableCell align="center">{orderRow.frequency}</TableCell>
                      <TableCell align="center">
                        {Math.round(orderRow.frequency * row.price)}
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
    totalincome: PropTypes.string.isRequired,
    totalorder: PropTypes.number.isRequired,
    busyhour: PropTypes.string.isRequired,
    payment: PropTypes.arrayOf(
      PropTypes.shape({
        frequency: PropTypes.number.isRequired,
        method: PropTypes.string.isRequired,
      }),
    ).isRequired,
    date: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    favitem: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData('29/12/2023', 'Rp 8.000.000', '100', '12:00-13:00', 'Nasi Ayam Penyet', 85000),
  createData('30/12/2023', 'Rp 9.500.000', '112', '12:00-13:00', 'Nasi Ayam Penyet', 80000),
  createData('31/12/2023', 'Rp 8.250.000', '101', '19:00-20:00', 'Nasi Bebek Penyet', 70000),
  createData('01/01/2024', 'Rp 12.000.000', '122', '19:00-20:00', 'Nasi Ayam Penyet', 120000),
  createData('02/01/2024', 'Rp 11.000.000', '115', '12:00-13:00', 'Nasi Ayam Penyet', 100000),
];

export default function SalesReport() {
    return (
     
            <TableContainer component={Paper}>
                <Heading content="Daily Sales Report"/>
                <Table aria-label="collapsible table">
                    <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Total Income</TableCell>
                        <TableCell align="right">Total Order</TableCell>
                        <TableCell align="right">Busy Hour</TableCell>
                        <TableCell align="right">Most Purchsed Item</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <Row key={row.date} row={row} />
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

