import { useMatrix } from '../hooks/useObjectiveFunction';
import { Row } from './Row';
import './styles_TFM.css';

const initialState = {
  FunctionObject: [3, 2, 1],
  Restrictions: [
    [1, 0, 1],
    [1, -1, 0],
    [0, 0, 3],
  ],
};

export const ObjectiveFunction = () => {
  console.log(initialState);
  const {
    matrix,
    handleAddRestriction,
    handleRmoveRestriction,  
    handleAddVariable,
    handleRemoveVariable,
    handleFunctionObjectChange,
    handleRestrictionChange, } = useMatrix(initialState);
  
  const { FunctionObject } = matrix;

  console.log(matrix);
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