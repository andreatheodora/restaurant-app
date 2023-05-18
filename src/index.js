import React from 'react';
import ReactDOM from 'react-dom/client';

import OrderPage from './OrderPage';
import LandingPage from './LandingPage';
import NotFoundPage from './NotFoundPage';
import MenuReview from './MenuReview';
import OrderReview from './OrderReview';
import AddMenu from './AddMenu';
import LogInPage from './LogInPage';
import PaymentMethod from './PaymentMethod';
import SalesReport from './SalesReport';
import EditMenu from './EditMenu';
import AddPayment from './AddPayment';
import EditPayment from './EditPayment';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { MenuList } from '@mui/material';
//import AddPayment from './AddPayment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>
  },
  {
    path: "/order",
    element: <OrderPage/>
  },
  {
    path: "/login",
    element: <LogInPage/>
  },
  {
    path: "/menu",
    element: <MenuReview/>
  },
  {
    path: "/orderreview",
    element: <OrderReview/>
  },
  {
    path: "/addmenu",
    element: <AddMenu/>
  },
  {
    path: "/editmenu",
    element: <EditMenu/>
  },
  {
    path: "/paymentmethod",
    element: <PaymentMethod/>
  },
  {
    path: "/salesreport",
    element: <SalesReport/>
  },
  {
    path: "/addpayment",
    element: <AddPayment/>
  },
  {
    path: "/editpayment",
    element: <EditPayment/>
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
