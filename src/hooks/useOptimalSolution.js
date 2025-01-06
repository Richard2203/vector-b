import { useEffect, useReducer } from 'react';
import { optimalSolutionReducer } from '../Reducer/MatrixCalculationsReducer';
import { UPDATE_INDEX, UPDATE_TYPE, UPDATE_VALUE } from '../Reducer/actionTypes';

const init = (initialTableState) => {
  const storedState = JSON.parse(localStorage.getItem('optimalSolution')) || initialTableState;
  return storedState;
};

export const useOptimalSolution = (initialTableState = {} ) => {
	const [optimalSolution, dispatch] = useReducer(
		optimalSolutionReducer, 
		initialTableState, 
		init
	);

	useEffect(() => {
		localStorage.setItem('optimalSolution', JSON.stringify(optimalSolution));
	}, [optimalSolution]);

	const handleUpdateType = (filaIndex, e) => {
		dispatch({
			type: UPDATE_TYPE,
			payload: { 
				filaIndex, 
				nuevoTipo: e.target.value 
			},
		});
	};	

	const handleUpdateIndex = (filaIndex, e) => {
		dispatch({
			type: UPDATE_INDEX,
			payload: { filaIndex, nuevoIndice: e.target.value },
		})
	};

	const handleUpdateValue = (filaIndex, valorIndex, e) => {
		dispatch({
			type: UPDATE_VALUE,
			payload: {
				filaIndex,
				valorIndex,
				nuevoValor: e.target.value,
			},
			})
	};

	return {
		...optimalSolution,
		optimalSolution,
		handleUpdateType,
		handleUpdateIndex,
		handleUpdateValue,
	};
};