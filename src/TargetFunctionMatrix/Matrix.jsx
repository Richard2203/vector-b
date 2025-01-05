import React from 'react'
import { useMatrix } from '../hooks/useMatrix';
import { ObjectiveFunction } from './ObjectiveFunction';
import { Restriction } from './Restriction';
import './styles_TFM.css';

const initialState = {
  FunctionObject: [3, 2, 1],
  Restrictions: [
    [1, -1, 0, 4],
    [2, 2, 0, 1],
    [0, 0, 1, 3],
  ],
  changeRow: [4,2,3],
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
        <div className="left-Content">
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
        <div className="right-Content">
            
        </div>
      </div>
    </div>
  )
}
