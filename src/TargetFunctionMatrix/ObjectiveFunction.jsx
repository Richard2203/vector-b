import { Row } from './Row';
import './styles_TFM.css';

export const ObjectiveFunction = ({matrix, handleFunctionObjectChange, handleRemoveVariable, handleAddVariable }) => {

  const { FunctionObject } = matrix;
  return (
    <>
      <h3>Función Objetivo</h3>
      <div className="site-container">
        <div className="card">
          <div className="row-obFunc">
            <strong> MaxZ </strong>
            <Row key={1} 
              functObjec={FunctionObject}
              handleFunctionObjectChange={handleFunctionObjectChange}/>
            <button 
              type="button" 
              className='button button-delete'
              onClick={handleRemoveVariable}> - </button>
            <button 
              type="button" 
              className='button button-add'
              onClick={handleAddVariable}> + </button>
          </div>
        </div>
      </div>
    </>
  )
}