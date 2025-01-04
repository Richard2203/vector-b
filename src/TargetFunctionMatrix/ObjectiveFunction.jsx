import { useObjectiveFunction } from '../hooks/useObjectiveFunction';
import { Row } from './Row';
import './styles_TFM.css';

export const ObjectiveFunction = () => {
  const {
    objectiveFunction,
    handleAddVariable,
    handleRemoveVariable, 
    handleUpdateVariable } = useObjectiveFunction({
      objeFunct: [3,2,1]
    });
  console.log(objectiveFunction);
  return (
    <>
    <h3>Función Objetivo</h3>
    <div className="site-container">
        <div className="card">
          <div className="row-obFunc">
            <strong> MaxZ </strong>
            <Row key={1} 
              objectiveFunction={objectiveFunction} 
              handleUpdateVariable={handleUpdateVariable}/>
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