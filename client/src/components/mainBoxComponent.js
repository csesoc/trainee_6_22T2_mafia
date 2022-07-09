import React from 'react';

export default function Box({ children, ...props}) {
    return (
        <div {...props}>
        	{children}
        </div>
    )
};