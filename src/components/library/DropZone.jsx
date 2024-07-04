/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// DropZone.js

import React from 'react';
import { useDrop } from 'react-dnd';

const DropZone = ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'item',
        drop: (item) => onDrop(item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        }),
    }));

    return (
        <div
            ref={drop}
            className="dropZoneScenario"
            style={{
                border: `2px dashed ${isOver ? 'green' : 'black'}`,
            }}>
            Drop here
        </div>
    );
};

export default DropZone;
