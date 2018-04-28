import React from 'react';

const Aux = (props) => {
    return (
        <div className="container mt-3">
            {props.children}
        </div>
    );
}

export default Aux;