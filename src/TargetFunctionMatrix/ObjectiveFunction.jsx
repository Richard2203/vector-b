import { useObjectiveFunction } from '../hooks/useObjectiveFunction';
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
          <p>A glass-like card to demonstrate the <strong>Glassmorphism UI design</strong> trend.</p>

          <div className="row-Container">
            <div className="input-container">
              <input className="inputNumber" type="number" defaultValue={1}/>
              <span className="focus-border"><i></i></span>
            </div>
            
          </div>

        </div>
      </div>
    </>
  )
}