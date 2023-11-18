import React from 'react';

const Body = ({children}) => {
    return (
        <div style={{maxWidth:"1040px"}} className='mx-auto mb-5'>
            {children}
        </div>
    );
};

export default Body;