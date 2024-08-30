import React from 'react';

const Error = ({ title, message, className }) => {
    return (
        <div className={`error ${className}`}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>
    );
}

export default Error;