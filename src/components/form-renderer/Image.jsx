/* eslint-disable no-unused-vars */
import React from 'react';
import {useDropzone} from 'react-dropzone';

function Image( props ) {

    const {acceptedFiles, getRootProps, getInputProps} = useDropzone({
            accept: {
                'image/png': ['.png'],
                'text/html': ['.html', '.htm'],
            }
        });
    
    const files = acceptedFiles.map(file => (
        <li key={file.path}>
        {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <section className="dropZoneParent">
            <div {...getRootProps({className: 'dropzoneSpanClass'})}>
                <input {...getInputProps()} />
                <p>Drag drop some <a className="hereClass">files</a> here, or click to select files</p>
            </div>
            <aside>
                <h4 className="fileHeader">File Upload</h4>
            </aside>
        </section>
    );
}

export default Image;