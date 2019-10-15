import React from 'react';

const button = props => {
    const style = {
        'backgroundColor': props.primaryColor 
    }
    return (
        <button style={style} onClick={props.onClick} >{props.children}</button>
    );
}

export default button;