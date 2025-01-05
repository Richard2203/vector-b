import React from 'react'
import { useMatrix } from '../hooks/useMatrix';
import { ObjectiveFunction } from './ObjectiveFunction';
import { Restriction } from './Restriction';

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
  
  const { FunctionObject, Restrictions } = matrix;

  return (
    <div className='site-container'>
      <div className='card'>
        <ObjectiveFunction 
          FunctionObject = { FunctionObject } 
          handleFunctionObjectChange = { handleFunctionObjectChange }
          handleRemoveVariable = { handleRemoveVariable }
          handleAddVariable = { handleAddVariable }
        />

        <Restriction 
          Restrict = { Restrictions }
          handleAddRestriction = { handleAddRestriction }
          handleRmoveRestriction = { handleRmoveRestriction }
          handleRestrictionChange = { handleRestrictionChange }
        />
      </div>
    </div>
  )
}
