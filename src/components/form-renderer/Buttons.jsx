/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */

import React, { useState, useRef } from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';
import { ColorPicker } from 'primereact/colorpicker';
import { Message } from 'primereact/message';

function DialogForEditButton( props ) {

    let { defaultValues } = props;
    const [ open, setDialogView ] = useState( false );
    const [ textColor, setTextColor ] = useState( "white" );
    const [ backgroundColor, setBackgroundColor ] = useState( "blue" );
    const [ error, setErrorState ] = useState( false );

    const handleOpen = () => {
        setDialogView( true );
    }

    const handleClose = () => {
        setDialogView( false );
    };

    let btnTextValue = useRef( defaultValues.btnText );
    let txtColorValue = useRef( "white" );
    let bgColorValue = useRef( "blue" );

    const handleSave = () => {

        btnTextValue = btnTextValue.current.value || "";
        if ( btnTextValue && btnTextValue.length > 0 ) {

            setErrorState( false );
            txtColorValue = txtColorValue.current.props.value || "white";
            bgColorValue = bgColorValue.current.props.value || "blue";

            props.onChangeInputForButton({ btnText: btnTextValue, txtColor: txtColorValue, bgColor: bgColorValue });
            handleClose();
        } else {
            setErrorState( true );
        }
    }

    return (
        <React.Fragment>
            <IconButton aria-label="edit" onClick={handleOpen}>
                <EditIcon />
            </IconButton>
            <Dialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={false}
                maxWidth="sm"
            >
            <DialogTitle sx={{ m: 0.5, p: 2 }} id="customized-dialog-title">
                Edit Button
            </DialogTitle>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <DialogContent className="dialogRenderer" dividers>

                    <Stack spacing={{ sm: 0.4, xs: 1 }} direction="column" useFlexGap flexWrap="wrap">
                        <React.Fragment>
                            <label htmlFor="textColor" > Text Color </label>
                            <ColorPicker name="textColor" value={textColor} ref={ txtColorValue } onChange={(e) => setTextColor(e.value)} inline></ColorPicker>
                        </React.Fragment>
                        <React.Fragment>
                            <label htmlFor="backgroundColor"> Background </label>
                            <ColorPicker name="backgroundColor" value={backgroundColor} ref={ bgColorValue } onChange={(e) => setBackgroundColor(e.value)} inline></ColorPicker>                        
                        </React.Fragment>
                        <React.Fragment>
                            <label htmlFor="btnText"> Text <span id="requiredFields"> * </span> </label>
                            <input type="text" name="btnText" ref={ btnTextValue } id="textInputForButton" required />
                            {
                                error? <Message severity="error" text="Button name required" />: null
                            }
                        </React.Fragment>

                    </Stack>
                        
                </DialogContent>
                <DialogActions>
                <Button variant="contained" color="success" onClick={ handleSave }>
                    Reflect
                </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

function Buttons( props ) {

    const { name } = props && props.itemData ? props.itemData: "";
    const [ defaultBtn, modifyBtn ] = useState({ btnText: name });
    const [ defaultTxtClr, setTxtColor ] = useState({ txtColor: "white" });
    const [ defaultBgColor, setBgColor ] = useState({ bgColor: "blue" });
    const [ defaultSytle, setStyle ] = useState({ color: "white", backgroundColor: "grey" });
    const [ editBtn, updateEditBtn ] = useState(false);

    let handleChange = ( props ) => {

        modifyBtn({ btnText: props.btnText });
        setTxtColor({ txtColor: props.txtColor });
        setBgColor({ bgColor: props.bgColor });
        setStyle({ color: "#" + props.txtColor, backgroundColor: "#" + props.bgColor });
        updateEditBtn( !editBtn );
    }

    return (
        <React.Fragment>
            <Button className="btnSpanClass" variant="contained" style={ defaultSytle }>{ defaultBtn.btnText }</Button>
            <DialogForEditButton defaultValues={ defaultBtn } onChangeInputForButton={ handleChange }></DialogForEditButton>
        </React.Fragment>
    );
}

export default Buttons;