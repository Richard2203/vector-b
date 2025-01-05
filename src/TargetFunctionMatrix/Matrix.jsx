import React from 'react'
import { useMatrix } from '../hooks/useObjectiveFunction';
import { ObjectiveFunction } from './ObjectiveFunction';
import { Restrictions } from './Restrictions';

const initialState = {
  FunctionObject: [3, 2, 1],
  Restrictions: [
    [1, 0, 1],
    [1, -1, 0],
    [0, 0, 3],
  ],
};

export const Matrix = () => {
  const {
    matrix,
    handleAddRestriction,
    handleRmoveRestriction,  
    handleAddVariable,
    handleRemoveVariable,
    handleFunctionObjectChange,
    handleRestrictionChange, } = useMatrix(initialState);
  return (
    <>
      <ObjectiveFunction 
        matrix = { matrix } 
        handleFunctionObjectChange = { handleFunctionObjectChange }
        handleRemoveVariable = { handleRemoveVariable }
        handleAddVariable = { handleAddVariable }
      />

      <Restrictions 
        handleAddRestriction = { handleAddRestriction }
        handleRmoveRestriction = { handleRmoveRestriction }
        handleRestrictionChange = { handleRestrictionChange }
      />
    </>
  )
}
