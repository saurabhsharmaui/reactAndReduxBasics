import React from 'react';

const Rainbow = (WrappedComponent) => {
    const colours = ['red', 'pink', 'orange', 'blue', 'green'];


    const randomColor = colours[Math.floor(Math.random() * 5)];

    const className = randomColor + '-text';

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props}></WrappedComponent>
            </div>
        )
    }
}

export default Rainbow;
