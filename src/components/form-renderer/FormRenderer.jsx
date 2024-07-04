/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { forwardRef, useState, useEffect, useLayoutEffect, useRef } from 'react';

import TextBox from "./TextBox.jsx";
import Image from "./Image.jsx";
import Buttons from "./Buttons.jsx";

function RenderTextBox() {
    
    const [range, setRange] = useState();
    const [lastChange, setLastChange] = useState();
    const [readOnly, setReadOnly] = useState(false);

    const quillRef = useRef();

    const element =
        <React.Fragment>
            <TextBox ref={quillRef}
                readOnly={readOnly}
                onSelectionChange={setRange}
                onTextChange={setLastChange}>
            </TextBox>
        </React.Fragment>

    return element;
}

function RenderImage() {

    const element =
        <React.Fragment>
            <Image />
        </React.Fragment>

    return element;
}

function RenderButton({ itemData }) {
    
    return (
        <React.Fragment>
            <Buttons itemData={ itemData } />
        </React.Fragment>
    )
}

function Render( props ) {
    
    const { tagName, itemData } = props;

    if ( tagName == "Text Box" ) 
        return <RenderTextBox />
    else if ( tagName == "Image" )
        return <RenderImage />
    else if ( tagName == "Button" )
        return <RenderButton itemData={ itemData } />
}

function FormRenderer( props ) {

    const{ name, itemData } = props;
    const renderComponents =
    <>
        <Render tagName={ name } itemData={ itemData } />
    </>
    return renderComponents;
}

export default FormRenderer;