import { useEffect, useReducer } from 'react';
import { ADD_VARIABLE, REMOVE_VARIABLE } from '../Reducer/actionTypes';
import { variablesReducer } from '../Reducer/MatrixCalculationsReducer';

const init = (initialObjectiveFunction) => { 
    return JSON.parse(localStorage.getItem('objectiveFunction')) || initialObjectiveFunction;
};

export const useObjectiveFunction = (initialObjectiveFunction) => {
    const [objectiveFunction, dispatchObjectiveFunction] = useReducer(
        variablesReducer, 
        initialObjectiveFunction, 
        init
    );

    useEffect(() => {
        localStorage.setItem('objectiveFunction', JSON.stringify(objectiveFunction));
    }, [objectiveFunction]);

    const handleAddVariable = (variable) => {
        dispatchObjectiveFunction({
            type: ADD_VARIABLE,
            payload: variable,
        });
    };

    const handleRemoveVariable = () => {
        dispatchObjectiveFunction({
            type: REMOVE_VARIABLE,
        });
    };

    return {
        objectiveFunction,
        handleAddVariable,
        handleRemoveVariable,
    };
};
