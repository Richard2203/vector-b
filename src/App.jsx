import './App.css'
import { Table } from './Matrix/Table'
import { Matrix } from './TargetFunctionMatrix/Matrix'

function App() {

  return (
    <>
      <div id="main-container">
      </div>
      <div id="content">
        <h1>Analisis de Sensibilidad - Cambios en el Vector B</h1>
        <Matrix />
        <Table/>
      </div>
    </> 
    
  )
}

export default App
 