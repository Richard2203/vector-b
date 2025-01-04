import { useEffect, useReducer } from 'react';
import { restricVarReducer } from '../Reducer/MatrixCalculationsReducer';

export const useObjectiveFunction = () => {
    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('optimalSolution')) || [];
    }

    const [optimalSolution, dispatchOptimalSolution] = useReducer(optimalSolutionReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('optimalSolution', JSON.stringify(optimalSolution));
    }, [optimalSolution]);

    const handleNewTodo = (todo) => {
        dispatchOptimalSolution({
            type: '[TODO] Add Todo',
            payload: todo,
        });
    };

    const handleDeleteTodo = (id) => {
        dispatchOptimalSolution({
            type:'[TODO] Delete Todo',
            payload: id,
        });
    };

    const handleTogoTodo=(id)=>{
        dispatchOptimalSolution({
            type:'[TODO] Toggle Todo',
            payload: id,
        });
    };

    return {
    };
};