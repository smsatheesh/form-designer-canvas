/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import React, { forwardRef, useState, useEffect, useLayoutEffect, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from './library/DragItem';
import DropZone from './library/DropZone';
import FormRenderer from './form-renderer/FormRenderer.jsx';
import Button from '@mui/material/Button';
import PreviewIcon from '@mui/icons-material/Visibility';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import "../styles/Component.css"; 

function ConditionalRendering({ index, name, item }) {
    return name;
}

function Component() {
    const [droppedItems, setDroppedItems] = useState([]);
    const [formRender, setStateOfForms] = useState(false);
    const [previewButtonText, setPreviewButtonText] = useState( "Preview" );

    const handleDrop = ( item, itemData ) => {
        setDroppedItems(( prevItems ) => [ ...prevItems, item ]);
    };

    const handleRemoveItem = ( index ) => {
        const updatedItems = [...droppedItems];
        updatedItems.splice(index, 1);
        setDroppedItems(updatedItems );
    }

    const handlePreviewForm = () => {

        if ( previewButtonText == "Preview" && droppedItems && droppedItems[ "length" ] > 0 ) {

            setStateOfForms( true );
            setPreviewButtonText( "Builder" );
        } else if ( previewButtonText == "Builder" ) {
            
            setPreviewButtonText( "Preview" );
            setStateOfForms( false );
        } 
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="dndProviderParentClass">
                <div className="dndProviderChildClass">
                    <div className="previewBtnContainer">
                        <Box sx={{ width: '100%' }}>
                            <Grid container>
                                <Grid item xs={10}>
                                    <h3 className="headerClass">{ !formRender ? "Form Builder": "Form Renderer" }</h3>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button component="label" role={undefined} variant="contained" tabIndex={-1} startIcon={<PreviewIcon /> }
                                        onClick={() => {
                                            handlePreviewForm() 
                                        }}
                                        class="previewButtonClass"
                                        >
                                            { previewButtonText }
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </div>
                        { !formRender ?
                    <React.Fragment>
                        <div className="initClass">
                            <Box sx={{ width: "100%" }}>
                                <Grid container>
                                    <Grid item xs={3}>
                                        <div className="lovComponents">
                                            <h3>Components</h3>
                                            <DragItem name="Text Box" />
                                            <DragItem name="Image" />
                                            <DragItem name="Button" />
                                        </div>
                                    </Grid>
                                    <Grid item xs={9}>
                                        <div className="lovChildComponents">
                                            <DropZone onDrop={handleDrop} />
                                            {droppedItems.map((item, index) => (
                                                <div key={index} className="droppedContainerClass">
                                                    <ConditionalRendering index={index} name={ item.name } item={ item } />
                                                <div>
                                                <IconButton class="deleteIcon" aria-label="delete" onClick={() => {
                                                    handleRemoveItem( index )
                                                }}>
                                                    <DeleteIcon />
                                                </IconButton>
                                                </div>
                                            </div>
                                            ))}
                                        </div>
                                    </Grid>
                                </Grid>
                            </Box>
                        </div>
                    </React.Fragment>
                    : 
                    <React.Fragment>
                        <div className="renderClass">
                            <Box sx={{ width: "100%" }}>
                                <Stack spacing={2}>
                                    <Box className="boxRenderer">
                                        <React.Fragment>
                                            <div className="parentRendererClass">
                                                {
                                                    <>
                                                        {droppedItems.map(function(data, index) {
                                                        return (
                                                                <FormRenderer key={ index } name={ data.name } itemData={ data } />
                                                            )
                                                        })}
                                                    </>
                                                }
                                            </div>
                                        </React.Fragment>
                                    </Box>
                                </Stack>
                            </Box>
                        </div>
                    </React.Fragment>
                }
                </div>
            </div>
        </DndProvider>
    );
}

export default Component;