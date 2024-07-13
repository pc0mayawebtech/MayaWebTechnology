import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './modules/screen/home/Home.jsx'
import Service from './modules/screen/Service/Service.jsx';
import About from './modules/screen/About/About.jsx';
import Contact from './modules/screen/Contact/Contact.jsx'
import RefundPolicy from './Components/Footer/RefundPolicy/RefundPolicy.jsx';
import PrivacyPolicy from './Components/Footer/PrivacyPolicy/PrivacyPolicy.jsx';
import TermCondition from './Components/Footer/TermsCondition/TermCondition.jsx';
import Disclaimer from './Components/Footer/Disclaimer/Disclaimer.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MobileDevelop from './modules/screen/Service/MobileDevelop.jsx'
import WebsiteService from './modules/screen/Service/WebsiteService.jsx'
import SoftwareDevelopment from './modules/screen/Service/SoftwareDevelopment.jsx'
import DigitalSDevelopment from './modules/screen/Service/DigitalSDevelopment.jsx'
import EcommerceDevelopment from './modules/screen/Service/EcommerceDevelopment.jsx'
import WebHosting from './modules/screen/Service/WebHosting.jsx'
import SoftwareTesting from './modules/screen/Service/SoftwateTesting.jsx'
import App from './App.jsx';
import Product from './modules/screen/Product/Product.jsx';

const router = createBrowserRouter([
  {
    path: '/app/',
    element: <App />,
    children: [
      {
        path: "service",
        element: <Service />,
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "product",
        element: <Product />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "refundpolicy",
        element: <RefundPolicy />
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy />
      },
      {
        path: "term-condition",
        element: <TermCondition />
      },
      {
        path: "disclaimer",
        element: <Disclaimer />
      },
      {
        path: "mobiledevelop",
        element: <MobileDevelop />
      },
      {
        path: "websiteservice",
        element: <WebsiteService />
      },
      {
        path: "softwaredevelopment",
        element: <SoftwareDevelopment />
      },
      {
        path: "digitaldevelopment",
        element: <DigitalSDevelopment />
      },
      {
        path: "ecommercedevelopment",
        element: <EcommerceDevelopment />
      },
      {
        path: "webhosting",
        element: <WebHosting />
      },
      {
        path: "softwaretesting",
        element: <SoftwareTesting />
      },
    ]
  },
  {
    path: '/',
    element: <Home />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
