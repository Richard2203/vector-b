import { Row } from './Row';
import './styles_TFM.css';

export const ObjectiveFunction = ({FunctionObject, handleFunctionObjectChange, handleRemoveVariable, handleAddVariable }) => {
  return (
    <>
      <h3>Función Objetivo</h3>
      <div className="row-obFunc">
        <strong> MaxZ </strong>
        <Row key={1} 
          functObjec = { FunctionObject }
          handleChange = { handleFunctionObjectChange }/>
        <button 
          type="button" 
          className='button button-delete'
          onClick = { handleRemoveVariable }> - </button>
        <button 
          type="button" 
          className='button button-add'
          onClick = { handleAddVariable }> + </button>
      </div>
    </>
  )
}