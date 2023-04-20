import React from 'react';
import ReactDOM from 'react-dom/client';

import OrderPage from './OrderPage';
import LandingPage from './LandingPage';
import NotFoundPage from './NotFoundPage';

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

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
