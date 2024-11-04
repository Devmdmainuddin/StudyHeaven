import React from 'react';

const Container = ({children,className}) => {
    return (
        <div className={`${className} max-w-[1280px] mx-auto px-6`}>
            {children}
        </div>
    );
};

export default Container;