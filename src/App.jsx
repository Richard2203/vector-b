import './App.css'
import { Matrix } from './TargetFunctionMatrix/Matrix'
import { ObjectiveFunction } from './TargetFunctionMatrix/ObjectiveFunction'

function App() {

  return (
    <>
      <div id="main-container">
      </div>
      <div id="content">
        <h1>Analisis de Sensibilidad - Cambios en el Vector B</h1>
        <ObjectiveFunction/>
        <Matrix />
      </div>
    </> 
    
  )
}

export default App
 