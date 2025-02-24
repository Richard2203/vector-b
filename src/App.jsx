import { useState } from 'react'
import './App.css'
import { Table } from './Matrix/Table'
import { Matrix } from './TargetFunctionMatrix/Matrix'

function App() {
  const [tablaSize, setTablaSize] = useState([0,0]);
  const [changeVectorB, setChangeVectorB] = useState([]);
  return (
    <>
      <div id="main-container">
      </div>
      <div id="content">
        <h1>Analisis de Sensibilidad - Cambios en el Vector B</h1>
        <Matrix 
          setTablaSize = { setTablaSize } 
          setChangeVectorB = { setChangeVectorB } />

        <Table 
          tablaSize = { tablaSize } 
          changeVectorB = { changeVectorB } />
      </div>
    </> 
    
  )
}

export default App
 