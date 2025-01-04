import { useEffect, useReducer } from 'react';
import { variablesReducer } from '../Reducer/MatrixCalculationsReducer';
import { ADD_VARIABLE, REMOVE_VARIABLE } from '../Reducer/actionTypes';

export const useObjectiveFunction = ( { initial = [] } ) => {
    const initialObjectiveFunction = initial;

    const init = () => {
        return JSON.parse(localStorage.getItem('objectiveFunction')) || [];
    }

    const [objectiveFunction, dispatchObjectiveFunction] = useReducer(variablesReducer, initialObjectiveFunction, init);

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
            type:REMOVE_VARIABLE
        });
    };

    return {
        ...objectiveFunction,
        objectiveFunction,
        handleAddVariable,
        handleRemoveVariable,
    };
};