import { useObjectiveFunction } from '../hooks/useObjectiveFunction';
import { Row } from './Row';
import './styles_TFM.css';

export const ObjectiveFunction = () => {
  const {
    objectiveFunction,
    handleAddVariable,
    handleRemoveVariable } = useObjectiveFunction([3,2,1]);

  return (
    <>
    <h3>Función Objetivo</h3>
    <div className="site-container">
        <div className="card">
          <strong> MaxZ </strong>
          <Row key={1} objectiveFunction={objectiveFunction}/>
        </div>
      </div>
    </>
  )
}