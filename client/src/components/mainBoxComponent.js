import React from 'react';

const Box = ({ children, ...props}) => {
    return (
        <div {...props}>
        	{children}
        </div>
    )
};

export default Box;