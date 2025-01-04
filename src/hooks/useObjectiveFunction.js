import { useEffect, useReducer } from 'react';
import { ADD_VARIABLE, REMOVE_VARIABLE, UPDATE_VARIABLE } from '../Reducer/actionTypes';
import { variablesReducer } from '../Reducer/MatrixCalculationsReducer';

const init = (initialObjectiveFunction) => { 
    return JSON.parse(localStorage.getItem('objectiveFunction')) || initialObjectiveFunction;
};

export const useObjectiveFunction = (initialObjectiveFunction) => {
    console.log(initialObjectiveFunction);
    const [objectiveFunction, dispatchObjectiveFunction] = useReducer(
        variablesReducer, 
        initialObjectiveFunction, 
        init
    );

    useEffect(() => {
        localStorage.setItem('objectiveFunction', JSON.stringify(objectiveFunction));
    }, [objectiveFunction]);

    const handleAddVariable = () => {
        dispatchObjectiveFunction({
            type: ADD_VARIABLE,
            payload: 0,
        });
    };

    const handleRemoveVariable = () => {
        dispatchObjectiveFunction({
            type: REMOVE_VARIABLE,
        });
    };

    const handleUpdateVariable = (index, newValue) => {
        dispatchObjectiveFunction({
          type: UPDATE_VARIABLE,
          payload: { index, newValue },
        });
      };

    return {
        objectiveFunction,
        handleAddVariable,
        handleRemoveVariable,
        handleUpdateVariable,
    };
};
