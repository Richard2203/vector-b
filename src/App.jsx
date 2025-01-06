import { useState } from 'react'
import './App.css'
import { Table } from './Matrix/Table'
import { Matrix } from './TargetFunctionMatrix/Matrix'

function App() {
  const [tablaSize, setTablaSize] = useState([0,0]);
  return (
    <>
      <div id="main-container">
      </div>
      <div id="content">
        <h1>Analisis de Sensibilidad - Cambios en el Vector B</h1>
        <Matrix setTablaSize = { setTablaSize } />
        <Table tablaSize = { tablaSize } />
      </div>
    </> 
    
  )
}

export default App
 