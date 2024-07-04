/* eslint-disable no-unused-vars */

import React from "react";
import ReactDOM from 'react-dom/client'
import "quill/dist/quill.core.css";

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

import App from './App.jsx'
import './../index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <App />,
);
