import React, { useEffect } from 'react'
import Fraction from "fraction.js";
import { useOptimalSolution } from '../hooks/useOptimalSolution';
import './Matrix.css';
import { Xb } from './Xb';

const initialTableState = {
  columnas: ["Ecuación", "X1", "X2", "X3", "S1", "S2", "S3", "Sol"],
  filas: [
    {
      tipo: "Z",
      indice: null,
      valores: ["0", "1", "0", "0", "3/2", "1", "11/2"],
    },
    {
      tipo: "S",
      indice: 1,
      valores: ["0", "-2", "0", "1", "-1/2", "0", "7/2"],
    },
    {
      tipo: "X",
      indice: 1,
      valores: ["1", "1", "0", "0", "1/2", "0", "1/2"],
    },
    {
      tipo: "X",
      indice: 3,
      valores: ["0", "0", "1", "0", "0", "1", "4"],
    },
  ],
  BminusOne:[],
  XbResult:[],
  isFactible: null,
};

export const Table = ({tablaSize, changeVectorB}) => {
	const {optimalSolution,
		handleUpdateType,
		handleUpdateIndex,
		handleUpdateValue,
		handleUpdateTable,
		handleCalculateXb,
		handleCalculateZ,
		handleIsFactible,
		handleSegmentMatrix, } = useOptimalSolution(initialTableState);
	
	useEffect(() => { 
		handleUpdateTable(tablaSize[0], tablaSize[1]); 
	}, [tablaSize]);

	const { BminusOne, XbResult, isFactible } = optimalSolution;

	return (
	 <>
		<table border="1">		
			<thead>
				<tr>
				{optimalSolution.columnas.map((columna, index) => (
					<th key={index}>{columna}</th>
				))}
				</tr>
			</thead>
			<tbody>
				{optimalSolution.filas.map((fila, filaIndex) => (
				<tr key={filaIndex}>
					{/* Celda para el tipo e índice */}
					<td>
						<input
							type="text"
							value={fila.tipo.toString()}
							onChange= { (e)=>{ handleUpdateType(filaIndex, e) } }
							style={{ width: "50px" }}
						/>
						<input
							type="number"
							value={fila.indice || ""}
							onChange={(e) => handleUpdateIndex(filaIndex, e)}
							style={{ width: "50px" }}
						/>
					</td>
					{/* Celdas para los valores */}
					{fila.valores.map((valor, valorIndex) => (
					<td key={valorIndex}>
						<input
						type="text"
						value={valor}
						onChange={(e) => handleUpdateValue(filaIndex, valorIndex, e)}
						style={{ width: "80px" }}
						/>
					</td>
					))}
				</tr>
				))}
			</tbody>
	  	</table>

		<Xb 
			handleCalculateXb = {handleCalculateXb} 
			BminusOne =  { BminusOne } 
			changeVectorB = { changeVectorB }
			handleSegmentMatrix = {handleSegmentMatrix}
			XbResult = {XbResult}
			isFactible = {isFactible} /> 
	 </>
	);
};