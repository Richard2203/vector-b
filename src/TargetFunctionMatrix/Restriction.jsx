import React from 'react'
import { Row } from './Row';

export const Restriction = ({Restrict, handleAddRestriction, handleRmoveRestriction, handleRestrictionChange } ) => {

  const handleChangeModify = (i) => (index, value) => {
    handleRestrictionChange(i, index, value);
  };

  return (
    <>
      <h3>Restricciones</h3>
      <div style={{marginLeft:'20px'}}>
        <button 
            type="button" 
            className='button button-delete button-delete-restriction'
            onClick={handleRmoveRestriction}> Remover Restricción </button>
        <button 
          type="button" 
          className='button button-add'
          onClick={handleAddRestriction}> Añadir Restricción </button>

        {
          Restrict.map((fila, i) =>(
            <Row 
              key = { i } 
              functObjec = { fila } 
              handleChange = { handleChangeModify(i) }
              isRestrictionRow = { true } />
          )
          )
        }
      </div>
    </>
  )
}
