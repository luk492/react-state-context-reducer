import React, { useReducer } from 'react';

const red = props => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            
            default:
                return state;
        }
    };

    function Increment({ initialCount }) {
        const [state, dispatch] = useReducer(reducer, { count: initialCount });
        return (
            <button onClick={() => dispatch({ type: 'increment'})}>
                Increment: {state.count} - {props.clicks}
            </button>
        );
    } 

    return (
        Increment({initialCount: 1})
    );
};

export default red;