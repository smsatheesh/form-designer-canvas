/* eslint-disable no-debugger */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { forwardRef, useState, useEffect, useLayoutEffect, useRef } from 'react';
import './../styles/App.css';

import Component from "./Component.jsx";

function App () {

    return (
      <React.Fragment>
        <h2 className="parentHeader"> FORM DESIGNER </h2>
        <Component />
      </React.Fragment>
    )
}

export default App;
