import { useEffect, useReducer } from 'react';
import { ADD_RESTRICTION, ADD_VARIABLE, REMOVE_RESTRICTION, REMOVE_VARIABLE, UPDATE_VARIABLE } from '../Reducer/actionTypes';
import { matrixReducer } from '../Reducer/MatrixCalculationsReducer';

const init = (initialState) => { 
    return JSON.parse(localStorage.getItem('matrix')) || initialState;
};

export const useMatrix = (initialState = {}) => {
    console.log(initialState);
    const [matrix, dispatch] = useReducer(
        matrixReducer, 
        initialState, 
        init
    );

    useEffect(() => {
        localStorage.setItem('matrix', JSON.stringify(matrix));
    }, [matrix]);

    const handleAddRestriction = (number) => {
        dispatch({
            type: ADD_RESTRICTION,
            payload: number,
        })
    };

    const handleRmoveRestriction = () => {
        dispatch({
            type: REMOVE_RESTRICTION,
        })
    };
    
    const handleAddVariable = () => {
        dispatch({
            type: ADD_VARIABLE,
        });
    };

    const handleRemoveVariable = () => {
        dispatch({
            type: REMOVE_VARIABLE,
        });
    };

    const handleFunctionObjectChange = (index, value) => {
        dispatch({ 
            type: UPDATE_VARIABLE, 
            payload: { 
                type: "FunctionObject", 
                index, 
                value: parseFloat(value) || 0 
            } 
        });
    };
    
    const handleRestrictionChange = (row, col, value) => {
        dispatch({ 
            type: UPDATE_VARIABLE, 
            payload: { 
                type: "Restrictions", 
                row, 
                col, 
                value: parseFloat(value) || 0 
            } 
        });
    };

    return {
        ...matrix,
        matrix,
        handleAddRestriction,
        handleRmoveRestriction,  
        handleAddVariable,
        handleRemoveVariable,
        handleFunctionObjectChange,
        handleRestrictionChange,
    };
};
