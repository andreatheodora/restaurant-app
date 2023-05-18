import React from 'react';
import ReactDOM from 'react-dom/client';

import OrderPage from './OrderPage';
import LandingPage from './LandingPage';
import NotFoundPage from './NotFoundPage';
import RestaurantView from './RestaurantView';
import MenuReview from './MenuReview';
import OrderReview from './OrderReview';
import AddMenu from './AddMenu';
import LogInPage from './LogInPage';
import PaymentMethod from './PaymentMethod';
import SalesReport from './SalesReport';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { MenuList } from '@mui/material';

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
    path: "/restaurant",
    element: <RestaurantView/>
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
    path: "/paymentmethod",
    element: <PaymentMethod/>
  },
  {
    path: "/salesreport",
    element: <SalesReport/>
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
