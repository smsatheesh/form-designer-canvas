/* eslint-disable no-debugger */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React from 'react';
import { useDrag } from 'react-dnd';

import "./../../styles/library.css";

const DragItem = ({ name }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'item',
        item: { name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }));

    return (
        <div
            ref={drag}
            className="draggingScenario"
            id="hereClass"
            style={{
                opacity: isDragging ? 0.5 : 1
            }}
            >
            { name }
        </div>
    );
};

export default DragItem;